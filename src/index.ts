import {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js';
import {StdioServerTransport} from '@modelcontextprotocol/sdk/server/stdio.js';
import {registerAuthTools} from './tools/auth/auth.tool.js';
import {registerStudentTools} from './tools/student/student.tool.js';
import {AuthService} from './tools/auth/auth.service.js';

const server = new McpServer({
  name: 'qldt-hanu-mcp',
  version: '1.0.0',
  description: 'MCP server for qldt.hanu.vn',
});

registerAuthTools(server);
registerStudentTools(server);

AuthService.loadPersistedSession();

const transport = new StdioServerTransport();
server.connect(transport).catch(error => {
  console.error('Failed to connect server to transport:', error);
  process.exit(1);
});
