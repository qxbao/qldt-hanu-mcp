import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { AuthService } from "./auth.service";

export const registerAuthTools = (server: McpServer) => {
    server.registerTool("login",
        {
            title: "Login QLDT",
            description: "Perform login into QLDT to get access token",
            inputSchema: {
                username: z.string(),
                password: z.string()
            },
        },
        async ({ username, password }) => {
            try {
                const message = await AuthService.login(username, password);
                return {
                    content: [{
                        type: "text",
                        text: message
                    }]
                };
            } catch (error: any) {
                return {
                    content: [{
                        type: "text",
                        text: `Login failed with Exception: ${error.message}`
                    }],
                    isError: true
                };
            }
        }
    )

    server.registerTool("get_session_status",
        {
            title: "Check Authentication",
            description: "Check if the server is authenticated",
            inputSchema: z.object({})
        },
        async () => {
            try {
                const message = AuthService.isAuthenticated() ? "Authenticated" : "Not authenticated";
                return {
                    content: [{
                        type: "text",
                        text: message
                    }]
                };
            } catch (error: any) {
                return {
                    content: [{
                        type: "text",
                        text: `Check authentication failed with Exception: ${error.message}`
                    }],
                    isError: true
                };
            }
        }
    )
};