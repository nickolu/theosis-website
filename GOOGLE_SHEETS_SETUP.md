# Google Sheets Integration Setup Guide

This guide will walk you through setting up Google Sheets integration for your Theosis show schedule.

## Quick Start Summary

1. Create a Google Cloud project and get an API key
2. Create a Google Sheet with your show data
3. Add the credentials to `.env.local`
4. Restart your development server

---

## Part 1: Google Cloud Setup (5 minutes)

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Click "Select a project" at the top
4. Click "NEW PROJECT"
5. Enter project name: `theosis-website`
6. Click "CREATE"

### Step 2: Enable Google Sheets API

1. In the Google Cloud Console, click the hamburger menu (☰)
2. Navigate to **APIs & Services** → **Library**
3. Search for "Google Sheets API"
4. Click on "Google Sheets API"
5. Click **ENABLE**

### Step 3: Create API Key

1. Navigate to **APIs & Services** → **Credentials**
2. Click **+ CREATE CREDENTIALS** at the top
3. Select **API Key**
4. Your API key will be created and displayed
5. **IMPORTANT**: Click **RESTRICT KEY** (recommended for security)
   - Under "API restrictions", select "Restrict key"
   - Click "Select APIs" dropdown
   - Check only "Google Sheets API"
   - Click "OK"
   - Click "SAVE"
6. **Copy the API key** - you'll need it for `.env.local`

---

## Part 2: Create Your Google Sheet (3 minutes)

### Step 1: Create the Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Click **+ Blank** to create a new spreadsheet
3. Name it: `Theosis Show Schedule`

### Step 2: Set Up Columns

In the first row (header row), enter these column names:

| A | B | C | D | E |
|---|---|---|---|---|
| Date | Venue | Location | Notes | Ticket Link |

### Step 3: Add Sample Data

Add a few test shows to verify the integration:

| Date | Venue | Location | Notes | Ticket Link |
|------|-------|----------|-------|-------------|
| 2025-12-15 | The Vanguard | Los Angeles, CA | Album release show | https://example.com/tickets |
| 2025-11-20 | The Whisky | San Diego, CA |  | https://example.com/tickets2 |
| 2024-10-01 | House of Blues | San Diego, CA | Past show example |  |

**Important formatting notes:**
- **Date format**: Use `YYYY-MM-DD` (e.g., `2025-12-15`)
- **Leave cells empty** rather than using "N/A" or "-"
- Dates in the past will automatically appear in "Past Shows"
- Dates today or in the future will appear in "Upcoming Shows"

### Step 4: Name the Sheet Tab

1. At the bottom, you'll see a tab named "Sheet1"
2. Right-click on it and select "Rename"
3. Rename it to: `Shows` (exactly as written, case-sensitive)

### Step 5: Make Sheet Public

1. Click the **Share** button (top right)
2. Click **Change to anyone with the link**
3. Make sure it says "Anyone with the link" and "Viewer"
4. Click **Done**

### Step 6: Get the Sheet ID

1. Look at the URL in your browser
2. The URL looks like: `https://docs.google.com/spreadsheets/d/1abc123def456ghi789/edit`
3. The Sheet ID is the part between `/d/` and `/edit`
4. In this example: `1abc123def456ghi789`
5. **Copy this ID** - you'll need it for `.env.local`

---

## Part 3: Configure Your Website (2 minutes)

### Step 1: Update Environment Variables

1. Open `.env.local` in your project
2. Replace the placeholder values:

```bash
GOOGLE_SHEETS_API_KEY=paste_your_api_key_here
GOOGLE_SHEET_ID=paste_your_sheet_id_here
```

Example:
```bash
GOOGLE_SHEETS_API_KEY=AIzaSyBk1234567890abcdefghijklmnopqr
GOOGLE_SHEET_ID=1abc123def456ghi789jkl
```

### Step 2: Restart Development Server

1. Stop your development server (Ctrl+C in terminal)
2. Start it again:
   ```bash
   npm run dev
   ```

### Step 3: Test the Integration

1. Open your website at `http://localhost:3002/shows`
2. You should see your shows from Google Sheets!
3. Past shows will appear in the "Past Performances" section
4. Upcoming shows will appear in the "Upcoming Shows" section

---

## How to Add/Update Shows

### Adding a New Show

1. Open your Google Sheet
2. Add a new row with the show details
3. Save (Google Sheets auto-saves)
4. Refresh your website - the new show will appear!

### Updating a Show

1. Edit the show details in Google Sheets
2. Save
3. Refresh your website to see changes

### Deleting a Show

1. Delete the row in Google Sheets
2. Save
3. Refresh your website - the show will be gone

---

## Data Fetching Behavior

- **Real-time**: Data is fetched from Google Sheets every time someone views the page
- **No caching**: Changes to your sheet appear immediately on page refresh
- **Performance**: Slight delay while loading, but always shows current data
- **Error handling**: If the sheet can't be loaded, the page still works (shows empty state)

---

## Troubleshooting

### Shows aren't appearing

1. **Check API Key**: Make sure it's correctly pasted in `.env.local`
2. **Check Sheet ID**: Verify the Sheet ID is correct
3. **Check sheet name**: The tab must be named exactly `Shows` (case-sensitive)
4. **Check permissions**: Sheet must be public ("Anyone with the link can view")
5. **Check API**: Make sure Google Sheets API is enabled in Cloud Console
6. **Restart server**: Stop and start `npm run dev` after changing `.env.local`

### API Key not working

1. Go to Google Cloud Console → Credentials
2. Click on your API key
3. Make sure "Google Sheets API" is checked under API restrictions
4. Try creating a new API key if issues persist

### Date format issues

- Use `YYYY-MM-DD` format (e.g., `2025-12-15`)
- Don't use `12/15/2025` or other formats
- Google Sheets might auto-format dates - make sure they stay as `YYYY-MM-DD`

### Sheet tab name issues

- The tab must be named exactly `Shows` (capital S, no spaces)
- Right-click the tab at the bottom and select "Rename"

---

## Google Sheet Template

Here's a complete template you can copy:

```
Date          | Venue              | Location          | Notes                    | Ticket Link
--------------+--------------------+-------------------+--------------------------+---------------------------
2025-12-15    | The Vanguard       | Los Angeles, CA   | Album release show       | https://example.com/tix1
2025-11-20    | The Whisky         | San Diego, CA     | Special guests: Band X   | https://example.com/tix2
2025-10-05    | House of Blues     | Anaheim, CA       |                          | https://example.com/tix3
2024-10-01    | Brick by Brick     | San Diego, CA     | Past show                |
```

---

## Security Notes

- ✅ **API Key**: Stored in `.env.local` (not committed to git)
- ✅ **Sheet is public**: Anyone with link can view (necessary for API key approach)
- ✅ **Read-only**: API key can only read, not modify your sheet
- ⚠️ **Don't commit**: Never commit `.env.local` to git (it's in `.gitignore`)

---

## Column Details

| Column | Required | Format | Description |
|--------|----------|--------|-------------|
| Date | Yes | YYYY-MM-DD | Date of the show |
| Venue | Yes | Text | Name of the venue |
| Location | Yes | Text | City, State/Country |
| Notes | No | Text | Additional details (guests, special events, etc.) |
| Ticket Link | No | URL | Full URL to ticket purchase page |

---

## Need Help?

If you're stuck, check:
1. `.env.local` has correct API key and Sheet ID
2. Development server was restarted after changing `.env.local`
3. Google Sheet is public and named "Shows"
4. Google Sheets API is enabled in Cloud Console
5. Date format is YYYY-MM-DD

---

## Next Steps

Once everything is working:
- Share the Google Sheet with band members for easy updates
- Add more shows to build your tour schedule
- Update show details as needed (venue, location, notes, etc.)
- The website will always show the current data from your sheet!
