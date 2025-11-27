import axios from "axios";

const API_BASE = "https://get-request-news.onrender.com/api";

export const getTopHeadlines = async (pageSize = 5) => {
  try {
    const res = await axios.get(API_BASE, {
      params: {
        q: "all",
        usa: true,
        pageSize,
        apiKey: "374caa319e5540c5a698624762d3639f",
      },
    });
    return res.data.articles;
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    return [];
  }
};

// fetch news by category
export const getNewsByCategory = async (category, pageSize = 5) => {
  try {
    const res = await axios.get(API_BASE, {
      params: {
        q: category,
        usa: true,
        pageSize,
        apiKey: "374caa319e5540c5a698624762d3639f",
      },
    });
    return res.data.articles;
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error);
    return [];
  }
};
