const menu = [

];

const dataMock = {
  header: {
    logo: 'https://iili.io/rP7SSI.md.png',
    name: 'Test Shop',
    home_url: '',
    flash: {
      enabled: true,
      message: "Flash custom meessage",
      tooltip_message: "Flash action custom message",
      trigger_message: "",
      action: {
        message: "Trigger message",
        href: "#section-info"
      }
    },
    bannerStyles: '',
    contact: { label: 'Contact Us', href: '/contacto' },
    cart: { label: 'Cart', href: '/gz/cart' },
    cartInfo: 5,
    i18n: { search: 'Search', searchPlaceholder: 'Search...' },
    headerAdditionalClasses: 'header-wrapper--with-flash with-hamburguer-menu',
    headerTransparent: '0,0,0,.8',
    sale: {
      text: 'sale',
      url: ''
    },
    menu,
  },
  footer: {
    logo: 'https://iili.io/rP7SSI.md.png',
    name: 'Test Shop',
    logoCaption: '<p>Custom text message</p>',
    mobileExtraClass: 'nav-bounds-large', // optional class, only for mobile
    footerEditableClass: 'nav-footer--editable', // optional class, editable footer
    email: 'test@shop.com',
    phone: {
      raw: '+5412344567',
      formatted: '12344567'
    },
    socialNetworks: [
      {
        account: 'facebook test',
        name: 'facebook',
        url: 'https://www.facebook.com/test_shop',
      },
      {
        account: 'instagram test',
        name: 'instagram',
        url: 'https://www.instagram.com/test_shop',
      },
      {
        account: 'twitter tes',
        name: 'twitter',
        url: 'https://twitter.com/test_shop',
      },
    ],
    address: {
      address: 'Test Address 123',
      city: 'Test city',
      state: 'Test state'
    },
    i18n: {
      contact: 'Test contact text',
      powered_by: 'Powered by Mercado Shops'
    },
    showContact: true,
    showEmail: true,
    showAddress: false,
    showPhone: true,
    showBusinessData: false, // just BR, only if data is present and user wants to show it
    showQrData: true, // just AR, only if QR is present and user wants to show it
    fiscalData: {
      legal_name: 'Test legal name', // just BR
      legal_doc: '12345', // just BR
      qr_img: 'https://gprinting.net/img/QR-AFIP.jpg', // just AR
      qr_link: 'https://www.afip.gob.ar' // just AR
    },
    menu,
  }
};

module.exports = { dataMock };
