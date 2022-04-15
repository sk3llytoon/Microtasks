type CarsType = {
    topCars: PropsCarsType[]
}
type PropsCarsType = {
    manufacturer: string,
    model: string,
}

export const Cars = (props: CarsType) => {
    return (
        <div>
            <table>
                <tbody>
            {props.topCars.map((objectTopCarsArray, index) => {
                return (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <th>{objectTopCarsArray.manufacturer}</th>
                            <td>{objectTopCarsArray.model}</td>
                        </tr>
                )
            })}
                </tbody>
            </table>
        </div>
    )
}