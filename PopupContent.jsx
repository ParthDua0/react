const PopupContent = ({copied}) => {
    const styless={
        position:"absolute",
        bottom: "3rem",
    }
  return (
    <section>
        {copied &&(
            <div style={styless}>
                Copied to Clipboard
            </div>
        )}
    </section>
  )
}

export default PopupContent