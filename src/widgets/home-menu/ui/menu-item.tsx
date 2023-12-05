export const MenuItem = () => {
    return (
        <div className="bg-gray-300  p-4 rounded-lg text-center group hover:bg-white hover:shadow-black/75 hover:shadow-md transition-all">
            <div className="text-center ">
                <img src="/pizza.png" alt="pizza" className="max-h-24 block mx-auto"/>
            </div>
            <h4 className="font-semibold my-3 text-xl my-3">Pepperoni Pizza</h4>
            <p className="text-gray-500 text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <button className="bg-primary text-white rounded-full px-8 py-2 mt-4 ">Add to cart $12</button>
        </div>
    )
}