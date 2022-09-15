    // artist lists
    const artists = [
        {
            name: 'Andres Lasga',
            id: 'artist-1',
            url: '2022/09/20200909145451.jpg',
        },
        {
            name: 'Askar Salimdjanov',
            id: 'artist-2',
            url: '2022/08/Askar_Salimdjanov_violin_IMG_8603-scaled.jpg',
        },
        {
            name: 'Catalina Cuervo',
            id: 'artist-3',
            url: '2022/09/Catalina-Cuervo_soprano_by-Alicia-Mar-Torres-3.jpg',
        },
        {
            name: 'Elaine Alvarez',
            id: 'artist-4',
            url: '2022/09/EAlvarez_Headshot2021_Wide_2-scaled.jpg',
        },
        {
            name: 'Gabriel Martins',
            id: 'artist-5',
            url: '2022/09/Gabriel_Martins_97c6c9cc_IMG_0654-1-scaled.jpg',
        },
        {
            name: 'Geneva Lewis',
            id: 'artist-6',
            url: '2022/09/Geneva-Lewis_violin_2021_01-HORIZONTAL-1-scaled.jpg',
        },
        {
            name: 'Gerardo Ortega',
            id: 'artist-7',
            url: '2022/09/DSC04450-scaled.jpg',
        },
        {
            name: 'Giselle Rios',
            id: 'artist-8',
            url: '2021/08/alumnipic11-1.jpg',
        },
        {
            name: 'John Gottsch',
            id: 'artist-9',
            url: '2022/09/John-Gottsch_composer_2020-0005-scaled.jpg',
        },
        {
            name: 'Kyaunnee Richardson',
            id: 'artist-10',
            url: '2022/09/G4R_6890Kyaunnee_Richardson_by_Gregory_Reed-scaled.jpg',
        },
        {
            name: 'Neil Nelson',
            id: 'artist-11',
            url: '2021/04/neil-nelson_700x400.jpg',
        },
        {
            name: 'Rehanna Thelwell',
            id: 'artist-12',
            url: '2021/08/Rehanna-Thelwell-ADA-Headshot-2.jpg',
        },
        {
            name: 'Stephanie Newman',
            id: 'artist-13',
            url: '2022/09/IMG_6042-scaled.jpg',
        },
        {
            name: 'Svetlana Smolina',
            id: 'artist-14',
            url: '2022/01/SS-Artist-Page-I-400x560-1.jpg',
        },
        {
            name: 'Zuill Bailey',
            id: 'artist-15',
            url: '2020/09/Zuill-Bailey-Plaza-Shot-2.jpg',
        }
    ];

    // get container
    const mainContainer = document.getElementById('main-content');
    const listContainer = document.querySelector('.parallax');

    // update background image   
    const updateImage = (e) => {
        artists.forEach((artist) => {
            if (e.target.getAttribute('id') === artist.id) {
                mainContainer.style.backgroundImage = `url(/wp-content/uploads/${artist.url})`;
            }
        });
    };

    // event function call
    listContainer.addEventListener('mouseover', updateImage);