import { NextRequest } from "next/server";

import { endpoints, getApiUrl } from "@/services/apiService";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Get auth token from HTTP-only cookie
    const authToken = req.cookies.get("auth-token");

    const res = await fetch(getApiUrl(endpoints.assistant.chat), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(authToken?.value && { Authorization: `Bearer ${authToken.value}` }),
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return Response.json(data, { status: res.status });
  } catch (error) {
    console.error("Error in idea chat:", error);
    return Response.json(
      {
        success: false,
        message: "Failed to process idea chat request",
      },
      { status: 500 },
    );
  }
}
