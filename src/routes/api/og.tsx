import { createFileRoute } from "@tanstack/react-router";

import { ImageResponse } from "@takumi-rs/image-response";
export const Route = createFileRoute("/api/og")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const url = new URL(request.url);
        const searchParams = Object.fromEntries(url.searchParams.entries()) as {
            title?: string;
            description?: string;
        };
        const { title, description } = searchParams;

        return new ImageResponse(
          <div tw="flex flex-col gap-2">
            <div>Title: {title}</div>
            <div>Description: {description}</div>
          </div>,
          {
            height: 630,
            width: 1200,
          },
        );
      },
    },
  },
});
