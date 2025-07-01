const scenes = {
    "entry1": {
        "title": "Eingang",
        "hfov": 110,
        "pitch": -7,
        "yaw": 143,
        "type": "equirectangular",
        "panorama": "entry1.webp",
        "hotSpots": [
            {
                "pitch": -6.285569029703409,
                "yaw": 98.55485272826695,
                "type": "scene",
                "text": "Laser",
                "sceneId": "laser"
            },
            {
                "pitch": -6.621885238056568,
                "yaw": 15.843818116482339,
                "type": "scene",
                "text": "Freifläche",
                "sceneId": "freiflaeche1"
            },
            {
                "pitch": -7.053628504229296,
                "yaw": 56.852442012066376,
                "type": "scene",
                "text": "E-Werkstatt",
                "sceneId": "electronic1"
            }
        ]
    },
    "laser": {
        "title": "Laser",
        "hfov": 120,
        "pitch": -14.4,
        "yaw": 10.5,
        "type": "equirectangular",
        "panorama": "laser.webp",
        "hotSpots": [
            {
                "pitch": -10.199478985280367,
                "yaw": 90.94932318943802,
                "type": "scene",
                "text": "Conference",
                "sceneId": "conference1"
            },
            {
                "pitch": -11.400626144440169,
                "yaw": 173.60462845311446,
                "type": "scene",
                "text": "Eingang",
                "sceneId": "entry1"
            }
        ]
    },
    "conference1": {
        "title": "Conference",
        "hfov": 120,
        "pitch": -14.4,
        "yaw": 10.5,
        "horizonRoll": -90,
        "type": "equirectangular",
        "panorama": "conference1.webp",
        "hotSpots": [
            {
                "pitch": -10.200463227510731,
                "yaw": -160.02289822309672,
                "type": "scene",
                "text": "Laser",
                "sceneId": "laser"
            }
        ]
    },
    "electronic1": {
        "title": "E-Werkstatt (1)",
        "hfov": 120,
        "pitch": -21.7,
        "yaw": 137.2,
        "type": "equirectangular",
        "panorama": "electronic1.webp",
        "hotSpots": [
            {
                "pitch": -13.555354781995948,
                "yaw": 32.635561927814365,
                "type": "scene",
                "text": "Eingang",
                "sceneId": "entry1"
            },
            {
                "pitch": -12.571356385662183,
                "yaw": -66.42959702835276,
                "type": "scene",
                "text": "Laser",
                "sceneId": "laser"
            },
            {
                "pitch": -14.71909211667732,
                "yaw": -148.02822890647099,
                "type": "scene",
                "text": "E-Werkstatt (3)",
                "sceneId": "electronic3"
            }
        ]
    },
    "electronic2": {
        "title": "E-Werkstatt (2)",
        "hfov": 120,
        "pitch": -21.7,
        "yaw": 137.2,
        "type": "equirectangular",
        "panorama": "electronic2.webp",
        "hotSpots": [
            {
                "pitch": -31.2702258280854,
                "yaw": -70.48214887597305,
                "type": "scene",
                "text": "E-Werkstatt (3)",
                "sceneId": "electronic3"
            },
            {
                "pitch": -8.193394835958022,
                "yaw": 7.552364829128351,
                "type": "scene",
                "text": "Eingang",
                "sceneId": "entry1"
            }
        ]
    },
    "electronic3": {
        "title": "E-Werkstatt (3)",
        "hfov": 120,
        "pitch": -21.7,
        "yaw": 137.2,
        "type": "equirectangular",
        "panorama": "electronic3.webp",
        "hotSpots": [
            {
                "pitch": -6.6638133164949735,
                "yaw": -73.96498835189595,
                "type": "scene",
                "text": "Eingang",
                "sceneId": "entry1"
            },
            {
                "pitch": -16.28992093987598,
                "yaw": -73.79301007759904,
                "type": "scene",
                "text": "E-Werkstatt (1)",
                "sceneId": "electronic1"
            },
            {
                "pitch": -29.631766056899995,
                "yaw": 17.603844656205297,
                "type": "scene",
                "text": "E-Werkstatt (2)",
                "sceneId": "electronic2"
            }
        ]
    },
    "freiflaeche1": {
        "title": "Freifläche (1)",
        "hfov": 120,
        "pitch": -8.2,
        "yaw": -199.5,
        "type": "equirectangular",
        "panorama": "freiflaeche1.webp",
        "hotSpots": [
            {
                "pitch": -15.624032996167601,
                "yaw": 160.39771745814767,
                "type": "scene",
                "text": "Freifläche (2)",
                "sceneId": "freiflaeche2"
            },
            {
                "pitch": -18.53280670931329,
                "yaw": -50.268578305850326,
                "type": "scene",
                "text": "Eingang",
                "sceneId": "entry1"
            },
            {
                "pitch": -10.097557890097725,
                "yaw": -124.1548056907032,
                "type": "scene",
                "text": "3D-Drucker",
                "sceneId": "3dprinter1"
            }
        ]
    },
    "freiflaeche2": {
        "title": "Freifläche (2)",
        "hfov": 120,
        "pitch": -10.6,
        "yaw": -101.9,
        "type": "equirectangular",
        "panorama": "freiflaeche2.webp",
        "hotSpots": [
            {
                "pitch": -7.455974272732688,
                "yaw": 52.41095456684627,
                "type": "scene",
                "text": "Eingang",
                "sceneId": "entry1"
            },
            {
                "pitch": -15.303320998272547,
                "yaw": 67.27942862916632,
                "type": "scene",
                "text": "Freifläche (1)",
                "sceneId": "freiflaeche1"
            },
            {
                "pitch": -12.288008171426368,
                "yaw": -111.82225028333096,
                "type": "scene",
                "text": "Freifläche (3)",
                "sceneId": "freiflaeche3"
            },
            {
                "pitch": -9.937845996602162,
                "yaw": 16.17512378148865,
                "type": "scene",
                "text": "3D-Drucker",
                "sceneId": "3dprinter1"
            }
        ]
    },
    "freiflaeche3": {
        "title": "Freifläche (3)",
        "hfov": 120,
        "pitch": -8.8,
        "yaw": 157.7,
        "type": "equirectangular",
        "panorama": "freiflaeche3.webp",
        "hotSpots": [
            {
                "pitch": -5.524507496853137,
                "yaw": -38.67353988443119,
                "type": "scene",
                "text": "Eingang",
                "sceneId": "entry1"
            },
            {
                "pitch": -8.331526298065588,
                "yaw": -28.886425125918777,
                "type": "scene",
                "text": "Freifläche (1)",
                "sceneId": "freiflaeche1"
            },
            {
                "pitch": -14.863451831123932,
                "yaw": -29.493380452660176,
                "type": "scene",
                "text": "Freifläche (2)",
                "sceneId": "freiflaeche2"
            },
            {
                "pitch": -5.99156897091407,
                "yaw": 153.4405741438893,
                "type": "scene",
                "text": "Freifläche (4)",
                "sceneId": "freiflaeche4"
            },
            {
                "pitch": -12.955427709673668,
                "yaw": -107.63498427015975,
                "type": "scene",
                "text": "Lounge (2)",
                "sceneId": "lounge2"
            },
            {
                "pitch": -8.920034130209734,
                "yaw": -159.22745410732136,
                "type": "scene",
                "text": "Küche (1)",
                "sceneId": "kitchen1"
            }
        ]
    },
    "freiflaeche4": {
        "title": "Freifläche (4)",
        "hfov": 120,
        "pitch": -3.7,
        "yaw": 151.2,
        "type": "equirectangular",
        "panorama": "freiflaeche4.webp",
        "hotSpots": [
            {
                "pitch": -3.207846975367322,
                "yaw": -61.31916373483614,
                "type": "scene",
                "text": "Eingang",
                "sceneId": "entry1"
            },
            {
                "pitch": -7.183700026776231,
                "yaw": -54.0585805254691,
                "type": "scene",
                "text": "Freifläche (2)",
                "sceneId": "freiflaeche2"
            },
            {
                "pitch": -19.9018665565724,
                "yaw": -54.399898593720195,
                "type": "scene",
                "text": "Freifläche (3)",
                "sceneId": "freiflaeche3"
            },
            {
                "pitch": -12.991984556968973,
                "yaw": -109.5472694189474,
                "type": "scene",
                "text": "Lounge (2)",
                "sceneId": "lounge2"
            },
            {
                "pitch": -7.9674305173189515,
                "yaw": -164.22199390593778,
                "type": "scene",
                "text": "Küche (1)",
                "sceneId": "kitchen1"
            },
            {
                "pitch": -3.4500501233860192,
                "yaw": -155.2580950558729,
                "type": "scene",
                "text": "Küche (2)",
                "sceneId": "kitchen2"
            },
            {
                "pitch": -1.2162856869234453,
                "yaw": 151.4413475653846,
                "type": "scene",
                "text": "Schnittstelle",
                "sceneId": "schnittstelle1"
            },
            {
                "pitch": 1.8608552549225872,
                "yaw": 145.2686012663404,
                "type": "scene",
                "text": "REM",
                "sceneId": "rem1"
            }
        ]
    },
    "3dprinter1": {
        "title": "3D-Drucker (Kein Foto vorhanden!)",
        "hfov": 120,
        "pitch": -3.7,
        "yaw": 151.2,
        "type": "equirectangular",
        "panorama": "PXL_20230610_100521559.PHOTOSPHERE.webp",
        "hotSpots": [
            {
                "pitch": -3.7,
                "yaw": 151.20000000000005,
                "type": "scene",
                "text": "Zurück",
                "sceneId": "freiflaeche1"
            }
        ]
    },
    "lounge1": {
        "title": "Lounge (1)",
        "hfov": 120,
        "pitch": -5.7,
        "yaw": -47.3,
        "type": "equirectangular",
        "panorama": "lounge1.webp",
        "hotSpots": [
            {
                "pitch": -12.25084303863866,
                "yaw": 124.36763190220222,
                "type": "scene",
                "text": "Lounge (2)",
                "sceneId": "lounge2"
            }
        ]
    },
    "lounge2": {
        "title": "Lounge (2)",
        "hfov": 120,
        "pitch": -8.4,
        "yaw": 117.8,
        "type": "equirectangular",
        "panorama": "lounge2.webp",
        "hotSpots": [
            {
                "pitch": -12.616389979557352,
                "yaw": 154.87500281836105,
                "type": "scene",
                "text": "Lounge (1)",
                "sceneId": "lounge1"
            },
            {
                "pitch": -4.535918144152288,
                "yaw": -104.08393655946213,
                "type": "scene",
                "text": "Freifläche (2)",
                "sceneId": "freiflaeche2"
            },
            {
                "pitch": -4.986012656346075,
                "yaw": -64.09627995571259,
                "type": "scene",
                "text": "Freifläche (3)",
                "sceneId": "freiflaeche3"
            },
            {
                "pitch": -4.618912390264796,
                "yaw": -37.72271327174235,
                "type": "scene",
                "text": "Freifläche (4)",
                "sceneId": "freiflaeche4"
            }
        ]
    },
    "kitchen1": {
        "title": "Küche (1)",
        "hfov": 120,
        "pitch": -12.8,
        "yaw": 89.3,
        "type": "equirectangular",
        "panorama": "kitchen1.webp",
        "hotSpots": [
            {
                "pitch": -7.4267640952443905,
                "yaw": -102.83397909748373,
                "type": "scene",
                "text": "Freifläche (4)",
                "sceneId": "freiflaeche4"
            },
            {
                "pitch": -9.283566399043803,
                "yaw": 96.697087193534,
                "type": "scene",
                "text": "Küche (2)",
                "sceneId": "kitchen2"
            }
        ]
    },
    "kitchen2": {
        "title": "Küche (2)",
        "hfov": 120,
        "pitch": -28.9,
        "yaw": 45.6,
        "type": "equirectangular",
        "panorama": "kitchen2.webp",
        "hotSpots": [
            {
                "pitch": -11.440727736257367,
                "yaw": -128.13942418890554,
                "type": "scene",
                "text": "Küche (1)",
                "sceneId": "kitchen1"
            },
            {
                "pitch": -4.9208899076070125,
                "yaw": -137.88019718736814,
                "type": "scene",
                "text": "Freifläche (4)",
                "sceneId": "freiflaeche4"
            },
            {
                "pitch": -8.963182679313833,
                "yaw": 140.79683251220308,
                "type": "scene",
                "text": "Lounge (1)",
                "sceneId": "lounge1"
            }
        ]
    },
    "schnittstelle1": {
        "title": "Schnittstelle",
        "hfov": 120,
        "pitch": -9.6,
        "yaw": 84.5,
        "type": "equirectangular",
        "panorama": "schnittstelle1.webp",
        "hotSpots": [
            {
                "pitch": -11.621767587752494,
                "yaw": -86.02657828312431,
                "type": "scene",
                "text": "Zurück",
                "sceneId": "freiflaeche4"
            }
        ]
    },
    "rem1": {
        "title": "REM",
        "hfov": 120,
        "pitch": -6.7,
        "yaw": 14.8,
        "type": "equirectangular",
        "panorama": "rem1.webp",
        "hotSpots": [
            {
                "pitch": -7.088437656189672,
                "yaw": -116.31702989282036,
                "type": "scene",
                "text": "Zurück",
                "sceneId": "freiflaeche4"
            }
        ]
    }
};
Object.values(scenes).forEach(scene => {
    scene.hotSpots.forEach(hotSpot => {
        hotSpot.cssClass = "big-arrow";
    });
});

function findStartScene(allScenes, fallback) {
    if (window.location.hash === '') {
        return fallback;
    }
    const sceneId = window.location.hash.substring(1);
    if (allScenes[sceneId]) {
        return sceneId;
    } else {
        console.log('Unknown scene id: ', sceneId);
        return fallback;
    }
}

const p = pannellum.viewer('panorama', {
    "autoLoad": true,
    "autoRotate": 1,
    // "hotSpotDebug": true,
    "basePath": "/media/pano-img/",
    "default": {
        "firstScene": findStartScene(scenes, "entry1"),
    },
    "scenes": scenes
});

p.on("load", function (e) {
    history.pushState({}, "", "#" + p.getScene());
});

if (p.getConfig().hotSpotDebug) {
    p.on("mousedown", function (e) {
        const coord = {
            pitch: p.getPitch(),
            yaw: p.getYaw(),
            type: "scene",
            text: "",
            sceneId: ""
        };
        console.log(JSON.stringify(coord))
    });
}