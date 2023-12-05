export const SectionHeader = (props: {subtitle:string, title: string}) => {
    const {subtitle, title} = props
    return <div className="text-center">
        <h3 className="uppercase text-gray-600 font-semibold ">{subtitle}</h3>
        <h2 className="text-primary font-bold text-4xl italic">{title}</h2>
    </div>
}