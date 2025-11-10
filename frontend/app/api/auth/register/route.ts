import { endpoints, getApiUrl } from "@/services/apiService";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(getApiUrl(endpoints.auth.register), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return Response.json(data, { status: res.status });
  } catch (error) {
    console.error("Error during registration:", error);
    return Response.json(
      {
        success: false,
        message: "Failed to process registration request",
      },
      { status: 500 },
    );
  }
}
