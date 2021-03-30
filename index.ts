addEventListener("fetch", (event) => {
    const html = `<html> 
        <p style="text-align:center;">
          <img src="https://avatars.githubusercontent.com/u/23420162?v=4" alt="tetty" width="300" height="300" />
        </p>
      </html>`;
    
    const res = new Response(html, {
      headers: {
        // The "text/html" part implies to the client that the content is HTML
        // and the "charset=UTF-8" part implies to the client that the content
        // is encoded using UTF-8.
        "content-type": "text/html; charset=UTF-8",
      },
    });

    event.respondWith(res);
});
