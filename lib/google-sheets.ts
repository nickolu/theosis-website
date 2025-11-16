import { google } from 'googleapis';

export interface Show {
  date: string;
  venue: string;
  location: string;
  notes?: string;
  ticketLink?: string;
}

/**
 * Fetches show data from Google Sheets
 * Returns upcoming and past shows separately, sorted by date
 */
export async function getShows(): Promise<{ upcoming: Show[], past: Show[] }> {
  try {
    // Validate environment variables
    if (!process.env.GOOGLE_SHEETS_API_KEY) {
      console.error('GOOGLE_SHEETS_API_KEY is not set');
      return { upcoming: [], past: [] };
    }

    if (!process.env.GOOGLE_SHEET_ID) {
      console.error('GOOGLE_SHEET_ID is not set');
      return { upcoming: [], past: [] };
    }

    // Initialize Google Sheets API client
    const sheets = google.sheets({
      version: 'v4',
      auth: process.env.GOOGLE_SHEETS_API_KEY,
    });

    // Fetch data from the sheet
    // Range 'Shows!A2:E' means: Sheet named 'Shows', columns A-E, starting from row 2 (skip header)
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Shows!A2:E', // Adjust if your sheet has a different name or more columns
    });

    const rows = response.data.values || [];

    console.log(rows);

    // Map rows to Show objects, filtering out invalid/empty rows
    const shows: Show[] = rows
      .filter(row => {
        // Ensure we have at least a date and venue with actual content
        const hasDate = row[0] && row[0].trim().length > 0;
        const hasVenue = row[1] && row[1].trim().length > 0;
        return hasDate && hasVenue;
      })
      .map((row) => ({
        date: row[0]?.trim() || '',
        venue: row[1]?.trim() || '',
        location: row[2]?.trim() || '',
        notes: row[3]?.trim() || undefined,
        ticketLink: row[4]?.trim() || undefined,
      }));

    // Sort all shows by date
    shows.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // Split into upcoming and past based on current date
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Start of today

    const upcoming = shows.filter(show => {
      const showDate = new Date(show.date);
      return showDate >= now;
    });

    const past = shows.filter(show => {
      const showDate = new Date(show.date);
      return showDate < now;
    }).reverse(); // Most recent first

    return { upcoming, past };
  } catch (error) {
    console.error('Error fetching shows from Google Sheets:', error);

    // Return empty arrays instead of throwing to prevent page crash
    // This ensures the page still renders even if the API call fails
    return { upcoming: [], past: [] };
  }
}
