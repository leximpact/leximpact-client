import Head from "next/head";
import Link from "next/link";
import { Fragment, PureComponent } from "react";

import { AppHeader } from "../components/common";
import { Matomo } from "../components/common";
import withRoot from "../lib/withRoot";

import styles from "./stats.module.scss";

class StatsPage extends PureComponent {
    render() {
        return (
            <Fragment>
                <Head>
                  <title>LexImpact - Statistiques d'usage</title>
                  <Matomo />
                </Head>
                <AppHeader showLoginButton={false} />
                <section className={styles.sectionText}>
                    <p>
                    <Link href="https://www.assemblee-nationale.fr/dyn/15/amendements?recherche_textuelle=leximpact">
                        Plus de 40 amendements</Link> de l'Assemblée nationale ont cité "leximpact".
                        Ce groupe d'amendements peut contenir des doublons.
                    </p>
                    <div>
                        Les calculs de l'application IR ont été repris en commission au débat de loi de finances pour 2021
                        <Link href="https://www.assemblee-nationale.fr/dyn/15/comptes-rendus/seance/session-ordinaire-de-2020-2021/deuxieme-seance-du-lundi-12-octobre-2020#P2220670">
                        Echanges en séance du lundi 12 octobre 2020
                        </Link>
                        Extraits :
                        <ul>
                            <li>
                                M. Jean-Noël Barrot : Nous éprouvons de la sympathie pour les amendements de ce genre, même si nous n’avons
                                pas souhaité en déposer en séance publique. Pour la clarté des débats, je tiens à signaler que le simulateur
                                LexImpact, dont nous disposons désormais, permet d’évaluer précisément le coût pour les finances publiques de
                                l’amendement de Mme Pires Beaune, qui s’établit à 800 millions d’euros. (Exclamationssur les bancs du groupe SOC.)
                                Mme Christine Pires Beaune : Ce sont 800 millions d’euros qui sont payés par les Français !
                                M. le président : La parole est à Mme Véronique Louwagie.
                                Mme Véronique Louwagie : Notre collègue vient de développer un argument en faveur de cet amendement (« Eh oui
                                ! » sur les bancs du groupe SOC), en exprimant clairement qu’au titre de l’article 2, ce sont 800 millions d’euros
                                supplémentaires qui vont être prélevés sur les revenus des Français !
                                Mme Valérie Rabault : Exactement !   
                            </li>
                            <li>
                                M. Laurent Saint-Martin, rapporteur général. Quant à cette série d’amendements sur le quotient familial, faites
                                attention. J’ai fait quelques simulations avec LexImpact pour évaluer leurs effets – cela fera plaisir à notre collègue
                                Jean-Noël Barrot. Seules les familles avec trois enfants et un revenu mensuel d’au moins 7 000 euros
                                bénéficieraient du dispositif, qui ne concernerait donc que les catégories plutôt aisées de la population. Ce n’est pas
                                la priorité, durant cette crise.
                            </li>
                        </ul> 
                    </div>
                    <p>
                        visites pages d'accueil : 1040 du 1er octobre au 7 décembre 2020
                    </p>
                    <p> 
                        nombre de simulations (date)
                        Ces statistiques sont à lire au regard du public d’usagers visé 
                        et de la répartition des tâches d'évaluation des amendements entre les parlementaires 
                        au sein des groupes politiques.
                    </p>
                    <div>
                        <img alt="" src="/icons/picto-impot-sur-le-revenu.png" />
                        IR cas types et population
                        Depuis la naissance du simulateur IR, nous mesurons le nombre de simulation sur la population.
                        Depuis octobre 2020, nous qualifions les visites.
                        Clics sur "Estimer" mesurés depuis le 27 octobre 2020 : 100 (au 7 décembre 2020)
                    </div>
                    <div>
                        <img alt="" src="/icons/picto-dotations-communes.png" />
                        dotations avec texte explicatif sur la répartition des activités d'évaluation dans les gpes parlementaires
                        Clics sur "Estimer" mesurés depuis le 27 octobre 2020 : 140 (au 7 décembre 2020)
                    </div>
                    <p>
                        entonnoir : 1) visites / index > page IR / dotations > nb simulations > nb amendements
                    </p>
                    <p>
                        périmètre des lois
                    </p>
                    <p>
                        temps d'évaluation 
                    </p>
                </section>
            </Fragment>
        )
    }
}

export default withRoot(StatsPage);
