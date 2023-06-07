const URLactual = window.location.pathname;
setTimeout(() => {
/*ELECTRONICA*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeUVn.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/electronica-audio-video/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeUVn.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/electronica-audio-video/_DisplayType_G' || URLactual == '/listado/electronica-audio-video/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*TELEVISORES*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AegPs.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/electronica-audio-video/televisores/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AegPs.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/electronica-audio-video/televisores/_DisplayType_G' || URLactual == '/listado/electronica-audio-video/televisores/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*AUDIO*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeeAN.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/electronica-audio-video/audio/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeeAN.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/electronica-audio-video/audio/_DisplayType_G' || URLactual == '/listado/electronica-audio-video/audio/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*ELECTRODOMESTICOS Y AIRES ACONDICIONADOS*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AekNI.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/electrodomesticos-aires-ac/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AekNI.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/electrodomesticos-aires-ac/_DisplayType_G' || URLactual == '/listado/electrodomesticos-aires-ac/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*LAVADO*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4Aevtt.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/electrodomesticos-aires-ac/lavado/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4Aevtt.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/electrodomesticos-aires-ac/lavado/_DisplayType_G' || URLactual == '/listado/electrodomesticos-aires-ac/lavado/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*REFRIGERACION*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeSoX.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/electrodomesticos-aires-ac/refrigeracion/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeSoX.webp';
    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/electrodomesticos-aires-ac/refrigeracion/_DisplayType_G' || URLactual == '/listado/electrodomesticos-aires-ac/refrigeracion/heladeras/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*CLIMATIZACION*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeO9p.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/electrodomesticos-aires-ac/climatizacion/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeO9p.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/electrodomesticos-aires-ac/climatizacion/_DisplayType_G' || URLactual == '/listado/electrodomesticos-aires-ac/climatizacion/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*COCINAS Y HORNOS*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AewSR.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/electrodomesticos-aires-ac/coccion/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AewSR.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/electrodomesticos-aires-ac/coccion/_DisplayType_G' || URLactual == '/listado/electrodomesticos-aires-ac/coccion/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*PEQUEÑOS ELECTRODOMESTICOS*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4Aejcv.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/electrodomesticos-aires-ac/pequenos-electrodomesticos/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4Aejcv.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/electrodomesticos-aires-ac/pequenos-electrodomesticos/_DisplayType_G' || URLactual == '/listado/electrodomesticos-aires-ac/pequenos-electrodomesticos/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*CELULARES*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeVMg.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/celulares-telefonos/celulares-smartphones/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeVMg.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/celulares-telefonos/celulares-smartphones/_DisplayType_G' || URLactual == '/listado/celulares-telefonos/celulares-smartphones/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*COMPUTACION*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AehKJ.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/computacion/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AehKJ.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/computacion/_DisplayType_G' || URLactual == '/listado/computacion/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*PC ESCRITORIO*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeWPa.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/computacion/pc-escritorio/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeWPa.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/computacion/pc-escritorio/_DisplayType_G' || URLactual == '/listado/computacion/pc-escritorio/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*TABLET*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeMoF.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/computacion/tablets-accesorios/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeMoF.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/computacion/tablets-accesorios/_DisplayType_G' || URLactual == '/listado/computacion/tablets-accesorios/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*NOTEBOOK*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeEt1.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/computacion/laptops-accesorios/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeEt1.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/computacion/laptops-accesorios/_DisplayType_G' || URLactual == '/listado/computacion/laptops-accesorios/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*MONITORES*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4Ae0AB.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/computacion/monitores-accesorios/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4Ae0AB.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/computacion/monitores-accesorios/_DisplayType_G' || URLactual == '/listado/computacion/monitores-accesorios/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*COMPONENTES*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4Ael9V.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/componentes' || URLactual == '/listado/computacion/componentes-pc/memoriasram' || URLactual == '/listado/computacion/componentes-pc/placas' || URLactual == '/listado/computacion/componentes-pc/discos-accesorios/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4Ael9V.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/componentes_DisplayType_G' || URLactual == '/componentes' || URLactual == '/listado/computacion/componentes-pc/memoriasram_DisplayType_G' || URLactual == '/listado/computacion/componentes-pc/placas/_DisplayType_G' || URLactual == '/listado/computacion/componentes-pc/discos-accesorios/_DisplayType_G') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*PERIFERICOS*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4Aea8Q.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/computacion/perifericos-pc/' || URLactual == '/listado/computacion/perifericos-pc/mouses-teclados/mouses/' || URLactual == '/listado/computacion/perifericos-pc/teclado' || URLactual == '/listado/computacion/perifericos-pc/webcams') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4Aea8Q.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/computacion/perifericos-pc/_DisplayType_G' || URLactual == '/listado/computacion/perifericos-pc/' || URLactual == '/listado/computacion/perifericos-pc/mouses-teclados/mouses/_DisplayType_G' || URLactual == '/listado/computacion/perifericos-pc/teclado_DisplayType_G' || URLactual == '/listado/computacion/perifericos-pc/webcams_DisplayType_G') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*IMPRESORAS*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4Ae7Fj.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/computacion/impresion/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4Ae7Fj.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/computacion/impresion/_DisplayType_G' || URLactual == '/listado/computacion/impresion/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*HERRAMIENTAS*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeYcx.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/herramientas/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeYcx.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/herramientas/_DisplayType_G' || URLactual == '/listado/herramientas/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*ELECTRICAS*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeAMu.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/herramientas/herramientas-electricas/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeAMu.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/herramientas/herramientas-electricas/_DisplayType_G' || URLactual == '/listado/herramientas/herramientas-electricas/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*JARDIN*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeIt9.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/herramientas/herramientas-jardin/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeIt9.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/herramientas/herramientas-jardin/_DisplayType_G' || URLactual == '/listado/herramientas/herramientas-jardin/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*MAS CATEGORIAS*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeR6b.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/deportes-fitness/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4AeR6b.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/deportes-fitness/_DisplayType_G' || URLactual == '/listado/deportes-fitness/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

/*HOGAR*/
if (document.querySelector('.ui-search-toolbar')) {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4Aeune.webp';
    banner.style = 'margin: 0 auto; max-width: 380px; display: flex;';

    const parent = document.querySelector('.ui-search-toolbar');

    if (URLactual == '/listado/hogar-muebles-jardin/muebles-hogar/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
} else {
    const banner = document.createElement('img');
    banner.src = 'https://iili.io/H4Aeune.webp';

    const parent = document.querySelector('.ui-search-results');

    if (URLactual == '/listado/hogar-muebles-jardin/muebles-hogar/') {
        if (parent !== null) {
            parent.insertBefore(banner, parent.firstChild);
        }

        throw new Error("Error controlado");
    }
}

},500)
