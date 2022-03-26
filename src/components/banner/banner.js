import Carousel from 'react-material-ui-carousel';
import "./banner.css";
export const MainBanner = () => {
    const images = [
        {
            "url": "/static/black-nike.png",
            "name": "nike",
            "color": "#404040",
            "title": "Nike Black All Day",
            "category": "Men's Training Shoe",
            "price": "4,995",
        },
        {
            "url": "/static/orange-nike.png",
            "name": "orange-nike",
            "color": "#A83C05",
            "title": "Nike Air VaporMax 2021 FK",
            "category": "Men's Shoes",
            "price": "4,995",
        },
        {
            "url": "/static/red-nike.png",
            "name": "red-nike",
            "color": "#82192D",
            "title": "Nike Zoom Fly 4",
            "category": "Men's Training Shoe",
            "price": "4,995",
        },
        {
            "url": "/static/white.png",
            "name": "white",
            "color": "#494D65",
            "title": "Giannis Immortality",
            "category": "Basketball Shoes",
            "price": "4,995",
        },
    ]
    return (
        <>
            <Carousel>
                {
                    images.map((data, i) =>
                        <>
                            <div style={{ backgroundColor: data?.color, }} key={i} id="imgStyle">
                                <div className='detailDiv'>
                                    <h1>{data?.title}</h1>
                                    <p className="price">{"₹" + data?.price}</p>
                                    <p className="taxes">incl. of taxes and duties</p>
                                    <button>SHOP NOW</button>
                                </div>
                                <img alt={data?.name}
                                    src={data?.url}
                                    className='floating'
                                    key={i}
                                />
                            </div>
                        </>
                    )

                }
            </Carousel>
        </>)
}