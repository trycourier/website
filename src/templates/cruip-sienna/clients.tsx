import React from 'react'

export type Client = {
  name: React.ReactNode
  logo: React.ReactNode
}

export type ClientsParams = {
  clients: Client[]
}

const ClientsComponent: React.FunctionComponent<ClientsParams> = ({
  clients,
}) => {
  if (!clients.length) return null
  return (
    <section id="clients" className="clients section">
      <div className="container">
        <div className="clients-inner section-inner">
          <div className="container-sm">
            <ul className="list-reset mb-0">
              {clients.map((client, idx) => (
                <li key={idx}>
                  <span className="screen-reader-text">{client.name}</span>
                  {client.logo}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsComponent
