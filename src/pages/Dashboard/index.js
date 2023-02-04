import Header from "../../components/Header"

export default function Dashboard() {
    const [liveText, liveTextUpdated] = useState('');

    return(
        <>
        <Header/>
        <Body>
            <input placeholder="Write/paste your yummy text here..." type="text" height={700} value={liveText} onChange={liveTextUpdated} />
        </Body>
        </>
    )
}