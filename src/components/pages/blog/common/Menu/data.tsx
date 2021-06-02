interface MenuDataProps {
    name: string
    slug: string
}

const MenuData: Array<MenuDataProps> = [
    {name: "Home Feed", slug: "home"}, 
    {name: "Courier", slug: "courier"}, 
    {name: "Courier Live", slug: "courier-live"}, 
    {name: "Engineering", slug: "engineering"}, 
    {name: "Integrations", slug: "integrations"}, 
    {name: "Live Streaming", slug: "live-streaming"}, 
    {name: "News & Updates", slug: "news-and-updates"}, 
    {name: "Notifications Landscape", slug: "notifications-landscape"}
];

export default MenuData;