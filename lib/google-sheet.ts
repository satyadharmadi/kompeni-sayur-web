/**
 * Fetch stock data from Google Sheet Apps Script endpoint
 */
export async function fetchStockFromGoogleSheet() {
  try {
    const sheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_CSV_URL;

    if (!sheetUrl) {
      console.warn("NEXT_PUBLIC_GOOGLE_SHEET_CSV_URL is not set");
      return null;
    }

    const response = await fetch(sheetUrl, {
      cache: "no-store", // Disable caching for real-time updates
    });

    if (!response.ok) {
      console.error("Failed to fetch Google Sheet:", response.status);
      return null;
    }

    const csvText = await response.text();
    console.log("Raw CSV:", csvText); // Debug log

    // Parse CSV - handle both \n and \r\n line endings
    const lines = csvText.split(/\r?\n/).filter(line => line.trim());
    
    if (lines.length < 2) {
      console.error("CSV format invalid or empty. Lines:", lines);
      return null;
    }

    const headers = lines[0].split(",").map((h) => h.trim());
    console.log("Headers:", headers); // Debug log

    const nameIndex = headers.findIndex(
      (h) => h.toLowerCase() === "name"
    );
    const stockIndex = headers.findIndex(
      (h) => h.toLowerCase() === "stock"
    );

    console.log("nameIndex:", nameIndex, "stockIndex:", stockIndex); // Debug log

    if (nameIndex === -1 || stockIndex === -1) {
      console.error("CSV missing 'Name' or 'Stock' columns");
      return null;
    }

    // Parse data rows
    const stockMap: Record<string, number> = {};
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue; // Skip empty lines

      const cells = line.split(",").map((c) => c.trim());
      const name = cells[nameIndex];
      const stockStr = cells[stockIndex];

      console.log(`Row ${i}: name="${name}", stock="${stockStr}"`); // Debug log

      if (name && stockStr) {
        const stock = parseInt(stockStr, 10);
        if (!isNaN(stock)) {
          stockMap[name] = stock;
          console.log(`Added to stockMap: ${name} = ${stock}`); // Debug log
        }
      }
    }

    console.log("Final stockMap:", stockMap); // Debug log
    return stockMap;
  } catch (error) {
    console.error("Error fetching Google Sheet:", error);
    return null;
  }
}
