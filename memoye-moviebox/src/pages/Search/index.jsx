import Card from "../../components/Card"
import HomeNav from "../../components/Navigation/HomeNav"

const Search = () => {
    return (
        <div>
            <HomeNav />

            <div className="cardsGrid">
                { results?.map((result) => {
                    return (
                        <Card
                            key={ result.id }
                            { ...result }
                        />
                    )
                })

                }
            </div>
        </div>
    )
}
export default Search