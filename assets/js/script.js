document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded successfully');

    const translations = {
        en: {
            greeting: 'Hello',
            description: `
                I am from Lapland. I went to school in Rovaniemi, but in practice I have spent most of my childhood in Salla. My father was from a Sami family and reindeer herding was present in my childhood home. I have a strong essence and connection to nature, because I have lived in the presence of nature. I have lived in Helsinki for almost my entire adult life, although my home is in Lapland.

                The experiences of the physical body have been my subject of interest for a long time. Physicality. How and where are experiences, emotions and traumas, because I believe that pain that is not allowed to be felt remains in the body, preventing the free flow of energy. Emotions are always related to trauma, and I do not believe that anyone can survive this world of phenomena without traumas. It is perhaps more about how deep they are.

                Who is Merja Kallunki?

                The greatest learning experiences I have had so far are from addiction, which taught me to escape. Violence in many forms taught the power of fear. The father's euthanasia taught body love, the alternation of breathing between birth (inhalation), death (exhalation), and emptiness, and the presence of stasis, eternity in the face of the death of the physical body.

                Of course, also my own children, whose pain has forced me to face my own, to scream, to feel, and to cry. To feel powerless. To surrender. So... from my own experience comes a passion to free myself from the story of the past and to bring light to experiences that are difficult to explain in words.
            `
        },
        fi: {
            greeting: 'Moi',
            description: `
                Olen kotoisin Lapista. Kävin koulut Rovaniemellä, mutta käytännössä olen viettänyt suurimman osan lapsuudestani Sallassa. Isäni oli saamelaisesta suvusta ja poronhoito oli läsnä lapsuudenkodissani. Omaan vahvan olemuksen ja yhteyden luontoon, koska olen elänyt läsnä luonnon kanssa. Olen lähes koko aikuisikäni asunut Helsingissä, vaikkakin kotini on Lapissa.

                Fyysisen kehon kokemukset ovat olleet mielenkiintoni kohteena pitkään. Kehollisuus. Miten ja missä ovat kokemukset, tunteet ja traumat, sillä uskon, että kipu, jota ei suostuta tuntemaan, jää kehoon estäen energian vapaan virtaamisen. Tunteet liittyvät aina traumaan, enkä usko, että kukaan selviää tästä ilmiömaailmasta ilman traumoja. Kyse on ehkä enemmänkin siitä, miten syviä ne ovat.

                Kuka Merja Kallunki on?

                Suurimmat oppikokemukset olen tähän mennessä saanut addiktiosta, joka opetti pakenemaan. Usean eri muodon väkivalta opetti pelon voiman. Isän saattohoitaminen opetti kehorakkauden, hengityksen vuorottelun syntymän (sisäänhengitys), kuoleman (uloshengitys) ja tyhjyyden välillä sekä pysähtyneisyyden, ikuisuuden läsnäolon fyysisen kehon kuoleman edessä.

                Tietysti myös omat lapset, joiden kipu on pakottanut kohtaamaan omansa, huutamaan, tuntemaan ja itkemään. Tuntemaan voimattomuutta. Antautumaan. Niin... omasta kokemuksesta syntyy intohimo vapauttaa menneisyyden tarinasta ja tuoda valoa kokemuksiin, joita on vaikea sanoin selittää.
            `
        }
    };

    const updateLanguage = (lang) => {
        console.log(`Switching to language: ${lang}`);
        document.getElementById('greeting').textContent = translations[lang].greeting;
        document.getElementById('description').innerHTML = translations[lang].description;
        document.documentElement.lang = lang;
    };

    document.getElementById('en-btn').addEventListener('click', () => updateLanguage('en'));
    document.getElementById('fi-btn').addEventListener('click', () => updateLanguage('fi'));
});