export const Header = () => {
    const now = new Date()

    const dateOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }

    const dateStr = now.toLocaleDateString('es-AR', dateOptions)

    return (
        <header className="header">
            <h1 className="header__logo">Gnss Application</h1>
            <div className="header__date">{dateStr}</div>
        </header>
    )
}
