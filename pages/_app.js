import Link from "next/link";
import "../styles/globals.css";
import Image from "next/image";

function MyApp({Component, pageProps}) {
    // const [state, setState] = useState({})
    // const [state1, setState1] = useState({})
    //
    // useEffect(() => {
    //   addEventListener
    //   //тело
    //   return () => {
    //     //функция отчистки
    //     removeEventListener
    //   }
    // }, [state])//массив зависимостей
    //
    // const ref = useRef(null)
    //
    // document.querySelector('a').addEventListener
    //
    // console.log(ref.current)// null
    //
    // useEffect(() => {
    //   console.log(ref.current) // ссылка на header
    // }, [])
    //
    // const test = useMemo(() => ({name: state1}), [state1])
    //
    // const test1 = useCallback(
    //   () => console.log(state1),
    //   [state1],
    // )
    //
    // // const test1 = () => console.log('Test')


    return (
        <div>
            <header
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding:'0 210px',
                    background: '#FFFFFF',
                    boxShadow: '-2px 0px 8px 2px rgba(0, 0, 0, 0.1)',
                    height:"60px",
                    width:"100vw",

                }}
            >
                <Image src="/../public/logo_black.png" width={45} height={49} alt="logo"/>
                <div
                    style={{display: "flex", gap: "24px", justifyContent: "space-between", alignItems: "center",
                        fontFamily: 'Karla',
                        fontSize: '18px',
                        fontWeight: '700',
                        lineHeight: '21px',
                        letterSpacing: '0em',
                        textAlign: 'center',
                    }}
                >
                    <Link href="/">Characters</Link>
                    <Link href="/locations">Locations</Link>
                    <Link href="/episodes">Episodes</Link>
                    <Link href="/form">Form</Link>
                </div>
            </header>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
