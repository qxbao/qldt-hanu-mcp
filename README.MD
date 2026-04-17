# qldt-hanu-mcp

![License](https://img.shields.io/badge/license-GPL--2.0-blue)
![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
![TypeScript](https://img.shields.io/badge/typescript-6.0-blue)
![MCP SDK](https://img.shields.io/badge/MCP%20SDK-1.29-purple)

[Model Context Protocol (MCP)](https://modelcontextprotocol.io) server for **QLDT HANU** — the student management system of Hanoi University ([qldt.hanu.edu.vn](https://qldt.hanu.edu.vn)). Enables your AI assistants to authenticate and directly interact with the university portal.

## 🚀 Quick Start

### 1. Build the Server

```bash
git clone https://github.com/qxbao/qldt-hanu-mcp.git
cd qldt-hanu-mcp
pnpm install
pnpm run compile
```

### 2. Configure Your IDE

Add the following to your MCP configuration file:

<details>
<summary><b>Gemini CLI / Google AI Studio</b></summary>

Edit `~/.gemini/settings.json` or your project's `.gemini/settings.json`:

```json
{
  "mcpServers": {
    "qldt-hanu-mcp": {
      "command": "node",
      "args": ["/absolute/path/to/qldt-hanu-mcp/build/src/index.js"]
    }
  }
}
```

</details>

<details>
<summary><b>Claude Desktop</b></summary>

Edit `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "qldt-hanu-mcp": {
      "command": "node",
      "args": ["/absolute/path/to/qldt-hanu-mcp/build/src/index.js"]
    }
  }
}
```

</details>

<details>
<summary><b>VS Code (Copilot / Continue / etc.)</b></summary>

Edit `.vscode/mcp.json` in your workspace:

```json
{
  "servers": {
    "qldt-hanu-mcp": {
      "command": "node",
      "args": ["/absolute/path/to/qldt-hanu-mcp/build/src/index.js"]
    }
  }
}
```

</details>

<details>
<summary><b>Cursor</b></summary>

Edit `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "qldt-hanu-mcp": {
      "command": "node",
      "args": ["/absolute/path/to/qldt-hanu-mcp/build/src/index.js"]
    }
  }
}
```

</details>

> **Note**: Replace `/absolute/path/to/qldt-hanu-mcp` with the actual path where you cloned the repository.

### 3. Start Using

Ask your AI assistant to:

- **"Login to QLDT for me with: xxxxxxx - [PASSWORD]"**
- **"Check my info on QLDT"**
- **"Check token readiness"**
- **"What is my schedule for semester 1 of 2023?"**
- **"Check my tuition fee status"**

## 🛠️ Available Tools

| Tool | Description | Auth Required |
|------|-------------|:---:|
| `login` | Authenticate with QLDT using student ID & password | ❌ |
| `get_session_status` | Check if the current session is authenticated | ❌ |
| `get_student_info` | Retrieve full student profile information | ✅ |
| `get_student_schedule` | Retrieve student schedule for a given semester and year | ✅ |
| `get_all_semester_tuition_fee` | Retrieve all semester tuition fee statuses | ✅ |

### Tool Details

#### `login`

Authenticate with the QLDT system.

| Parameter | Type | Required | Description |
|-----------|------|:---:|-------------|
| `username` | `string` | ✅ | Student ID |
| `password` | `string` | ✅ | Account password |

#### `get_session_status`

Check whether the server currently holds a valid authentication token. No parameters required.

#### `get_student_info`

Fetch the authenticated student's profile. Returns data in Vietnamese, including:

- Personal info (name, date of birth, gender, ethnicity, etc.)
- Academic info (class, major, faculty, academic year)
- Contact info (phone, email, address)
- Advisor info (name, phone, email)
- Enrollment status

#### `get_student_schedule`

Fetch the student's schedule for a specific academic year and semester. Returns data in Vietnamese.

| Parameter | Type | Required | Description |
|-----------|------|:---:|-------------|
| `year` | `string` | ✅ | Start year of the academic year (e.g., "2023" for 2023-2024) |
| `semester` | `string` | ✅ | Semester of the schedule (e.g., "1", "2") |

#### `get_all_semester_tuition_fee`

Fetch the student's tuition fee statuses across all semesters. Returns data in Vietnamese. No parameters required.

## 🧑‍💻 Development

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** (recommended) or npm

### Setup

```bash
# Install dependencies
pnpm install

# Compile TypeScript
pnpm run compile

# Run tests
pnpm test

# Lint
pnpm run lint

# Auto-fix lint issues
pnpm run fix
```

### Tech Stack

| Component | Technology |
|-----------|-----------|
| Runtime | Node.js |
| Language | TypeScript 6.0 |
| MCP SDK | `@modelcontextprotocol/sdk` |
| HTTP Client | Axios |
| Validation | Zod |
| Testing | Vitest |
| Linting | GTS (Google TypeScript Style) |

## 🔒 Security

- Credentials are transmitted directly to QLDT's official authentication endpoint over HTTPS.
- Access tokens are stored **in-memory only** and never persisted to disk.
- The server uses a randomized User-Agent for each session.

## 📋 Roadmap

- [x] Course schedule retrieval
- [ ] Grade / transcript lookup
- [x] Tuition fee status
- [ ] Course registration

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the **GNU General Public License v2.0** — see the [LICENSE](LICENSE) file for details.

---

> **Disclaimer**: This is an unofficial, community-driven project. It is not affiliated with or endorsed by Hanoi University. Use at your own discretion.
