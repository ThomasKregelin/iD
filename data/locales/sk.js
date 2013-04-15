/*
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    THIS FILE IS GENERATED BY `make translations`. Don't make changes to it.

    Instead, edit the English strings in data/core.yaml, or contribute
    translations on https://www.transifex.com/projects/p/id-editor/.

    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
locale.sk = {
    "modes": {
        "add_area": {
            "title": "Plocha",
            "description": "Pridaj do mapy parky, budovy, jazerá alebo dalšie plochy.",
            "tail": "Kliknite na mapu a začnite kresliť plochu ako park, jazero alebo budovu."
        },
        "add_line": {
            "title": "Čiara",
            "description": "Pridaj do mapy cesty, ulice, chodníky pre chodcov, kanály alebo iné čiary.",
            "tail": "Kliknite na mapu a začnite kresliť cestu, chodník alebo trať."
        },
        "add_point": {
            "title": "Bod",
            "description": "Pridaj do mapy reštaurácie, pamätihodnosťi, poštové schránky alebo iné body.",
            "tail": "Kliknite na mapu a pridajte bod."
        },
        "browse": {
            "title": "Prehľadať",
            "description": "Posunúť a priblížiť mapu."
        },
        "draw_area": {
            "tail": "Kliknite pre pridanie uzlov ku ploche. Pre dokončenie plochy, kliknite na prvý uzol."
        },
        "draw_line": {
            "tail": "Kliknite pre pridanie ďalších uzlov ku čiare. Kliknite na iné čiary aby ste ich spojili a potom dva krát kliknite pre ukončenie čiary."
        }
    },
    "operations": {
        "add": {
            "annotation": {
                "point": "Pridanie bodu.",
                "vertex": "Pridanie bodu k čiare."
            }
        },
        "start": {
            "annotation": {
                "line": "Začatie čiary.",
                "area": "Začatie plochy."
            }
        },
        "continue": {
            "annotation": {
                "line": "Pokračovanie čiary.",
                "area": "Pokračovanie plochy."
            }
        },
        "cancel_draw": {
            "annotation": "Zrušenie kreslenia."
        },
        "change_tags": {
            "annotation": "Zmenenie označenia."
        },
        "circularize": {
            "title": "Usporiadaj do kruhu",
            "key": "O",
            "annotation": {
                "line": "Usporiadanie čiary do kruhu.",
                "area": "Usporiadanie plochy do kruhu."
            }
        },
        "orthogonalize": {
            "title": "Usporiadaj do pravého uhla.",
            "description": "Sprav rohy pravouhlé.",
            "key": "Q",
            "annotation": {
                "line": "Usporiadanie rohov čiary do pravého uhla.",
                "area": "Usporiadanie rohov plochy do pravého uhla."
            }
        },
        "delete": {
            "title": "Vymaž",
            "description": "Odstráň z mapy.",
            "annotation": {
                "point": "Odstránenie bodu.",
                "vertex": "Odstránenie uzla z cesty.",
                "line": "Odstránenie čiary.",
                "area": "Odstránenie plochy.",
                "relation": "Odstránenie relácie.",
                "multiple": "Odstránenie {n} objektov."
            }
        },
        "connect": {
            "annotation": {
                "point": "Pripojenie cesty k bodu.",
                "vertex": "Pripojenie cesty k inej ceste.",
                "line": "Pripojenie cesty k čiare.",
                "area": "Pripojenie cesty k ploche."
            }
        },
        "disconnect": {
            "title": "Rozpoj",
            "description": "Oddeľ od seba tieto čiary/plochy.",
            "key": "D",
            "annotation": "Oddelenie čiar/plôch."
        },
        "merge": {
            "title": "Spoj",
            "description": "Spoj tieto čiary.",
            "key": "C",
            "annotation": "Spojenie {n} čiar."
        },
        "move": {
            "title": "Posuň",
            "description": "Presuň na iné miesto.",
            "key": "M",
            "annotation": {
                "point": "Posunutie bodu.",
                "vertex": "Posunutie uzlu cesty.",
                "line": "Posunutie čiary.",
                "area": "Posunutie čiary.",
                "multiple": "Posunutie viacerých objektov."
            }
        },
        "rotate": {
            "title": "Otoč",
            "description": "Otoč objekt okolo jeho stredového bodu.",
            "key": "R",
            "annotation": {
                "line": "Otočenie čiary.",
                "area": "Otočenie plochy."
            }
        },
        "reverse": {
            "title": "Obráť",
            "description": "Obráť smer čiary na opačnú stranu.",
            "key": "V",
            "annotation": "Obrátenie čiary."
        },
        "split": {
            "title": "Rozdeľ",
            "description": {
                "line": "Rozdeľ čiaru v tomto uzle na dve.",
                "multiple": "Rozdeľ čiary/hranice plôch v tomto uzle na dve."
            },
            "key": "X",
            "annotation": {
                "line": "Rozdeľ čiaru.",
                "area": "Rozdeľ ohraničenie plochy.",
                "multiple": "Rozdelenie {n} čiar/hraníc plôch. "
            },
            "not_eligible": "Čiary nemôžu byť rozdelené na ich začiatku alebo konci.",
            "multiple_ways": "Príliš veľa čiar na rozdelenie."
        }
    },
    "nothing_to_undo": "Nič na vrátenie.",
    "nothing_to_redo": "Nič na zopakovanie.",
    "just_edited": "Práve ste upravili OpenStreetMap!",
    "browser_notice": "Tento editor je podporovaný v prehliadačoch Firefox, Chrome, Safari, Opera, a Internet Explorer 9 a vyšší. Prosím aktualizujte svoj prehliadač alebo použite  Potlatch 2 na editovanie mapy.",
    "view_on_osm": "Zobraz na OSM",
    "zoom_in_edit": "Priblíž pre editovanie mapy",
    "logout": "odhlásiť",
    "loading_auth": "Pripájam na OpenStreetMap...",
    "report_a_bug": "nahlásiť chybu",
    "commit": {
        "title": "Ulož zmeny",
        "description_placeholder": "Stručný popis tvojho prispievania",
        "message_label": "Pripojiť správu",
        "upload_explanation": "Zmeny, ktoré nahráš ako {user}, budú viditeľné na všetkých mapách, ktoré používajú údaje z OpenStreetMap.",
        "save": "Ulož",
        "cancel": "Zruš",
        "warnings": "Varovania",
        "modified": "Upravené",
        "deleted": "Odstránené",
        "created": "Vytvorené"
    },
    "contributors": {
        "list": "S prispením {users}",
        "truncated_list": "S prispením {users} a {count} dalších "
    },
    "geocoder": {
        "title": "Nájdi miesto",
        "placeholder": "Nájdi miesto",
        "no_results": "Nebolo možné nájsť miesto s menom \"{name}\""
    },
    "geolocate": {
        "title": "Ukáž moju polohu"
    },
    "inspector": {
        "no_documentation_combination": "Pre túto kombináciu označenia nie je dostupná dokumentácia",
        "no_documentation_key": "Pre tento kľúč nie je dostupná dokumentácia",
        "show_more": "Ukáž viac",
        "new_tag": "Nové označenie",
        "view_on_osm": "Zobraz na openstreetmap.org",
        "editing_feature": "Upravovanie {feature}",
        "additional": "Dodatočné označenia",
        "choose": "Zvoľ typ vlastnosti",
        "results": "{n} výsledkov pre {search}",
        "reference": "Zobraz na OpenStreetMap Wiki",
        "back_tooltip": "Zmeň typ vlastnosti"
    },
    "background": {
        "title": "Pozadie",
        "description": "Nastavenia pozadia",
        "percent_brightness": "{opacity}% jas",
        "fix_misalignment": "Oprav prekryv",
        "reset": "vynulovať"
    },
    "restore": {
        "heading": "Máte neuložené zmeny",
        "description": "Želáte si obnoviť neuložené zmeny z predchádzajúcej relácie?",
        "restore": "Obnov",
        "reset": "Vynuluj"
    },
    "save": {
        "title": "Ulož",
        "help": "Ulož zmeny do OpenStreetMap a sprístupni ich ďalším užívateľom.",
        "no_changes": "Žiadne zmeny na uloženie.",
        "error": "Počas ukladania sa vyskytla chyba",
        "uploading": "Nahrávam zmeny do OpenStreetMap.",
        "unsaved_changes": "Máte neuložené zmeny"
    },
    "splash": {
        "welcome": "Vitajte v iD editore pre OpenStreetMap",
        "text": "iD je prívetivý ale silný nástroj pre prispievanie do najlepšej slobodnej mapy sveta. Toto je vývojová verzia {version}. Pre viac informácií navštívte {website} a nahlasujte chyby na {github}.",
        "walkthrough": "Začni prehliadku",
        "start": "Upravuj"
    },
    "source_switch": {
        "live": "pripojený",
        "lose_changes": "Máte neuložené zmeny. Zmenou mapového servera ich zrušíte. Ste si istý, že chcete prepnúť na iný server?",
        "dev": "dev"
    },
    "tag_reference": {
        "description": "Popis",
        "on_wiki": "{tag} na wiki.osm.org",
        "used_with": "použité s {type}"
    },
    "validations": {
        "untagged_point": "Neoznačený bod",
        "untagged_line": "Neoznačená čiara",
        "untagged_area": "Neoznačená plocha",
        "many_deletions": "Vymazávate {n} objektov. Ste si naozaj istý? Týmto ich vymažete z mapy na openstreetmap.org, ktorú používajú ďalší používatelia.",
        "tag_suggests_area": "Označenie {tag} predpokladá, že objekt by mal byť plochou a nie čiarou.",
        "deprecated_tags": "Neschválené označenie: {tags}"
    },
    "zoom": {
        "in": "Priblížiť",
        "out": "Oddialiť"
    },
    "cannot_zoom": "V tomto móde nemožno viac oddialiť.",
    "gpx": {
        "local_layer": "Lokálny GPX súbor",
        "drag_drop": "Pretiahnite a pustite .gpx súbor na stránku"
    },
    "help": {
        "title": "Pomoc",
        "help": "# Pomoc\n\nToto je editor pre [OpenStreetMap](http://www.openstreetmap.org/), slobodnú a upravovateľnú mapu sveta. Môžete ho používať na pridávanie a aktualizovanie údajov vo vašom okolí a vylepšiť tak mapu sveta s otvoreným kódom a dátami pre všetkých.\n\nÚpravy, ktoré v tejto mape spravíte, budú viditeľné pre každého, kto používa OpenStreetMap. Na to, aby ste mohli upravovať, budete potrebovať [OpenStreetMap účet](https://www.openstreetmap.org/user/new).\n\n[iD editor](http://ideditor.com/) je kolaboratívny projekt so [zdrojovým kódom dostupným na GitHub](https://github.com/systemed/iD).\n"
    },
    "intro": {
        "navigation": {
            "drag": "Hlavná plocha s mapou zobrazuje nad pozadím údaje z OpenStreetMap. Posúvať sa môžete ťahaním za mapu a koliečkom myši rovnako ako u iných webových máp. **Potiahnite za mapu!**",
            "select": "Objekty na mape sú reprezentované tromi spôsobmi: pomocou bodov, čiar alebo plôch. Všetky objekty môžu byť vybrané kliknutím na ne. **Kliknite na bod aby ste ho vybrali.**",
            "header": "Hlavička nám ukazuje typ objektu.",
            "pane": "Keď je objekt vybraný, zobrazí sa editor objektu. Hlavička nám ukazuje typ objektu a hlavný panel zobrazuje atribúty objektu, ako sú jeho meno a adresa. **Zatvorte editor objektu pomocou tlačítka vpravo hore.**"
        },
        "points": {
            "add": "Body môžu byť použité na znázorňovanie objektov ako sú obchody, reštaurácie a pamätihodnosťi. Označujú špecifickú polohu a popisujú čo tam je. **Kliknite na tlačidlo Bod a pridajte nový bod.**",
            "place": "Bod môžete umiestniť kliknutím na mapu. **Umiestnite bod na vrch budovy.**",
            "search": "Bod môže znázorňovať veľa rôznych objektov. Bod, ktorý ste práve pridali, je Kaviareň. **Vyhľadajte \"Kaviareň\"**",
            "choose": "**Vyberte Kaviareň z ponuky.**"
        },
        "startediting": {
            "start": "Začnite mapovať!"
        }
    },
    "presets": {
        "fields": {
            "access": {
                "label": "Prístup"
            },
            "address": {
                "label": "Adresa",
                "placeholders": {
                    "housename": "Názov domu",
                    "number": "123",
                    "street": "Ulica",
                    "city": "Mesto"
                }
            },
            "aeroway": {
                "label": "Typ"
            },
            "amenity": {
                "label": "Typ"
            },
            "atm": {
                "label": "Bankomat"
            },
            "bicycle_parking": {
                "label": "Typ"
            },
            "building": {
                "label": "Budova"
            },
            "building_area": {
                "label": "Budova"
            },
            "building_yes": {
                "label": "Budova"
            },
            "capacity": {
                "label": "Kapacita"
            },
            "collection_times": {
                "label": "Časy výberov"
            },
            "construction": {
                "label": "Typ"
            },
            "crossing": {
                "label": "Typ"
            },
            "cuisine": {
                "label": "Druh jedla"
            },
            "denomination": {
                "label": "Vierovyznanie"
            },
            "elevation": {
                "label": "Nadmorská výška"
            },
            "emergency": {
                "label": "Záchranná služba"
            },
            "fax": {
                "label": "Fax"
            },
            "fee": {
                "label": "Poplatok"
            },
            "highway": {
                "label": "Typ"
            },
            "historic": {
                "label": "Typ"
            },
            "internet_access": {
                "label": "Prístup k Internetu",
                "options": {
                    "wlan": "Wifi",
                    "wired": "Káblom",
                    "terminal": "Terminál"
                }
            },
            "landuse": {
                "label": "Typ"
            },
            "layer": {
                "label": "Vrstva"
            },
            "leisure": {
                "label": "Typ"
            },
            "levels": {
                "label": "Poschodia"
            },
            "man_made": {
                "label": "Typ"
            },
            "maxspeed": {
                "label": "Povolená rýchlosť"
            },
            "operator": {
                "label": "Operátor"
            },
            "phone": {
                "label": "Telefón"
            },
            "place": {
                "label": "Typ"
            },
            "railway": {
                "label": "Typ"
            },
            "religion": {
                "label": "Náboženstvo"
            }
        }
    }
};