export default function Card({ cards }) {
    return (
        <div>
            <h1 className="mb-5 text-center +">Card</h1>

            <ul style={{ display: 'grid', 'grid-template-columns': '1fr 1fr 1fr ', 'grid-gap': '4em' }}>

                {cards.map(card => {
                    return (

                        <div className="row" key={card.id} >
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <div className=" text-xl  text-center"> {card.title}</div><hr></hr>
                                <div class="mt-2 flex flex-col justify-center items-center">
                                    <img className="object-center object-cover h-40 " src={card.image} alt="json file image"></img>
                                </div>
                                <div class="px-6 pt-4 pb-2 ps-10">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><b>brand :</b> {card.brand}</span><br></br>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><b>Price :</b> {card.price}</span>
                                    <br></br>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><b>Discount(%) :</b> {card.discountPercentage}</span>
                                    <br></br>

                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><b>Category :</b> {card.category}</span><br></br>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><b>Stock : </b> {card.stock}</span>
                                    <br></br>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><b>rating :</b> {card.rating} {card.discountPercentage}</span>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const cards = await fetch('http://localhost:3004/card').then(res => res.json());
    return {
        props: {
            cards
        }
    }
}