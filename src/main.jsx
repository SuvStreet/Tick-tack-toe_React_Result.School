import ReactDOM from 'react-dom/client'
import Game from './Game.jsx'
import './index.css'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Game />
	</StrictMode>,
)
