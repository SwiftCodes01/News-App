## News App – React + Tailwindcss (NewsAPI Integration)

A simple and modern React-based News Application that fetches real-time articles from NewsAPI.org.
The app includes category filtering, a featured article section, and a clean UI for viewing top headlines.

## Installation Procedure


1. Clone the repo:
   git clone https://github.com/your-username/news-app.git
   After cloning, navigate into the project directory:
   cd your-repo-name


2. Install dependencies:
   Install all required project packages by running:
   npm install

   
3. Create a `.env` file:
   In the root folder of the project, create a file named .env.
   Add your NewsAPI key inside the file:
   VITE_API_KEY=your_newsapi_key
   
4. Start development server:
   npm run dev

This will start the development server and open the application in your browser.



## Note

Due to the free NewsAPI Developer plan restrictions:
- Requests from deployed websites (Netlify/Vercel/GitHub Pages) are blocked.
- The API only works on localhost.
- To see live data, run the app locally after setting your API key.



