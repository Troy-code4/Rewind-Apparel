# Rewind Apparel

A responsive React + Vite storefront and hands-on learning project. Existing
pages and interactions remain usable; unfinished learning exercises have
TODO comments and hardcoded examples so the app runs without a backend.

## Run locally

```sh
npm install
npm run dev
```

## React concepts already in the app

- Function components, imports/exports, and a component per page/section.
- Props: `ProductCard` receives a product object; page sections receive
  notification callbacks.
- Lists rendered with `.map()` and stable `key` props.
- Conditional rendering: new-product badges and search results.
- Event handlers: menu/search controls, filters, sorting, and demo form submits.
- `useState` for the mobile menu, search, product filters, toast, and demo
  contact-form confirmation.
- React Router routes for Home, Collections, Journal, Contact, Product, and
  Cart.

## Your learning TODOs

Work through these in any order. The routes and static fallback content are
already present where useful.

### Components and forms

- [ ] Pass `name`, `price`, and `image` as individual `ProductCard` props
  instead of passing the whole product object.
- [ ] Extract a shared layout wrapper that accepts and renders `children`.
- [ ] Convert the newsletter email field to a controlled input.
- [ ] Add field-level contact/newsletter validation and connect submissions to
  a real endpoint.

### State and data flow

- [ ] Implement wishlist toggle state and selected-heart styling.
- [ ] Implement add/remove bag state, quantity updates, and the header count.
- [ ] Keep cart updates immutable when adding, removing, or changing quantities.
- [ ] Lift cart state so both the header and product cards can access it.

### Side effects, refs, and data fetching

- [ ] Add a `useEffect` with a dependency array to fetch products from an API.
- [ ] Add loading, error, success, and retry UI around the product request.
- [ ] Save and restore cart data with `localStorage` in an effect.
- [ ] Close the mobile menu/search on Escape with an effect and cleanup function.
- [ ] Use a ref to focus the search field when search opens.
- [ ] Use a ref to scroll the new-arrivals row from its previous/next controls.

### Shared state and custom hooks

- [ ] Create `CartContext` with `createContext` and `useContext`, then provide it
  above the routes.
- [ ] Replace the cart state with `useReducer` actions: add, remove, change
  quantity, and clear.
- [ ] Extract reusable `useCart` and/or `useLocalStorage` hooks.

### Routing

- [ ] Use `Link` for internal navigation and `NavLink` for active navigation.
- [ ] Use `useNavigate` for a programmatic flow such as returning to shopping.
- [ ] Read `/product/:id` with `useParams` and look up the matching product.
- [ ] Replace the hardcoded `/product/:id` and `/cart` content with data-driven
  pages.

## Hardcoded stubs

- `src/data/products.js` is the local product fixture; its TODO marks the
  fetch/loading/error exercise.
- `src/App.jsx` has hardcoded Product and Cart route pages and TODOs for
  `useParams`, cart context, reducer, hooks, and a `children` wrapper.
- The header count is hardcoded to `0`; wishlist and carousel controls display
  demo feedback rather than updating data.
- The contact form shows a local confirmation only. It does not send messages.
