import { app } from "./app";
import 'dotenv/config'

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`o servidor está funcionando em: http://localhost:${PORT}`))