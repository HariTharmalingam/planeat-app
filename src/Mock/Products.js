import { Product } from "../Models/Product";

const PRODUCTS = [
  new Product({
    id: 'p1',
    user: 'u1',
    title: 'Red Shirt',
    photo: 'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
    content: 'A red t-shirt, perfect for days with non-red weather.',
    price: 29.99
  }),
  new Product({
    id: 'p2',
    user: 'u1',
    title: 'Blue Carpet',
    photo: 'https://images.pexels.com/photos/6292/blue-pattern-texture-macro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    content: 'Fits your red shirt perfectly. To stand on. Not to wear it.',
    price: 99.99
  }),
  new Product({
    id: 'p3',
    user: 'u2',
    title: 'Coffee Mug',
    photo: 'https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg',
    content: 'Can also be used for tea!',
    price: 8.99
  }),
  new Product({
    id: 'p4',
    user: 'u3',
    title: 'The Book - Limited Edition',
    photo: 'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?cs=srgb&dl=blur-blurred-book-pages-46274.jpg&fm=jpg',
    content: "What the content is? Why would that matter? It's a limited edition!",
    price: 15.99
  }),
  new Product({
    id: 'p5',
    user: 'u3',
    title: 'PowerBook',
    photo: 'https://get.pxhere.com/photo/laptop-computer-macbook-mac-screen-water-board-keyboard-technology-air-mouse-photo-airport-aircraft-tablet-aviation-office-black-monitor-keys-graphic-hardware-image-pc-exhibition-multimedia-calculator-vector-water-cooling-floppy-disk-phased-out-desktop-computer-netbook-personal-computer-computer-monitor-electronic-device-computer-hardware-display-device-448748.jpg',
    content: 'Awesome hardware, crappy keyboard and a hefty price. Buy now before a new one is released!',
    price: 2299.99
  }),
  new Product({
    user: 'p6',
    price: 'u1',
    title: 'Pen & Paper',
    photo: 'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    content: "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
    price: 5.49
  })
]
export default PRODUCTS;
