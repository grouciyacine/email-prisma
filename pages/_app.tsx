import 'styles/tailwind.css';
type props={
  Component:any,
  pageProps:any
}
function MyApp({ Component, pageProps }:props) {
  return (
    <div className="bg-gray-900 py-56">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
