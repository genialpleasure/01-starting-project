export default function Tabs({ children, buttons, Buttonscontainer = 'menu' }) {
    //const Buttonscontainer =buttonsContainer;
    return <>
        <Buttonscontainer>{buttons}</Buttonscontainer>
        {children}
    </>
}