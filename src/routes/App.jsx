import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Construction from '../pages/Construction'

const App = ({ setContentLanguaje, Lang }) => {
    //#region  Contenido e idioma

    // const [Lang, setLang] = useState('es')
    // const [_info, setInfo] = useState(getContentByLang(Lang))

    // useEffect(() => {
    //     setInfo(getContentByLang(Lang))
    // }, [Lang])

    // const toggleLang = nlang => setLang(nlang)

    // const navbarInfo = {
    //     navbar: _info.navbar,
    //     toggleLang,
    //     Lang: Lang === 'es' ? 'en' : 'es',
    //     LangShow: Lang,
    //     socialMedia: _info.socialMedia,
    // }
    //#endregion

    //#region  Prevent resize from keyboard
    let vData = { vh: window.innerHeight, vw: window.innerWidth }
    document.documentElement.style.setProperty('--vh', `${(vData.vh * 0.01)}px`);

    window.addEventListener('resize', () => {
        const _vData = { vh: window.innerHeight, vw: window.innerWidth }
        const cambiow = vData.vw !== _vData.vw
        const cambioh = vData.vh !== _vData.vh
        const esMayor = vData.vh < _vData.vh
        const diff = vData.vh - _vData.vh
        const cambioFuerte = diff > 100
        // console.log(`cambio w: ${cambiow} | cambio h: ${cambioh} | es mayor:${esMayor} | diff: ${diff} | cambio fuerte: ${cambioFuerte}`)
        if (cambiow || (cambioh && esMayor) || !cambioFuerte) {
            // console.log(`Cambio el tamaño de la pantalla`, vData.vh, _vData.vh)
            vData = _vData
            document.documentElement.style.setProperty('--vh', `${(_vData.vh * 0.01)}px`);
        }
    });
    //#endregion

    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    {/* <Route exact path="/" render={() => <Home info={_info} />} /> */}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/work" component={Construction} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App