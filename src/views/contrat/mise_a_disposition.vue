<template>
  <div class="page">
    <div class="about">
      <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
      </head>
        <div id="container"><br>
          <form>
            <div class="columns">
              <div class="column is-two-fifths has-text-centered">
              </div>

              <div class="column has-text-centered"><br>
                <p><strong> {{agence.agenceInterim}} </strong></p><br>
                <p> {{agence.adresseAgence}}</p>
                <p> {{agence.telAgence}} </p>
              </div>
            </div>

              <div class="columns">
                <div class="column has-text-centered">
                  <p><strong>CONTRAT DE MISE A DISPOSITION / {{mission.refContrat}}</strong></p>
                </div>
              </div>
          </form>
        </div><hr class="tiret"><br>

        <div id="sujet" class="columns">

          <div class="column is-half">

            <div>
              <h1><strong> CLIENT </strong></h1>
            </div><hr id="hrClient"><br>

            <div class="columns">
              <div class="column is-two-left has-text-left"> Raison Sociale : </div>
              <div class="column has-text-left">{{client.raisonSociale}}</div>
            </div>

            <div class="columns">
              <div class="column is-two-left has-text-left"> Représenté par : </div>
              <div class="column has-text-left">{{client.representePar}}</div>
            </div>

            <div class="columns">
              <div class="column is-two-left has-text-left"> Personne à demander : </div>
              <div class="column has-text-left">{{client.personneDemander}}</div>
            </div>

            <div class="columns">
              <div class="column is-two-left has-text-left"> Lieu d'activité : </div>
              <div class="column has-text-left">{{client.lieuActivite}}</div>
            </div>

            <div class="columns">
              <div class="column is-two-left has-text-left"> Téléphone : </div>
              <div class="column has-text-left">{{client.telephoneClient}}</div>
            </div>

            <div class="columns">
              <div class="column is-one-quarter has-text-left"> Adresse : </div>
              <div class="column has-text-left">{{client.adresseClient}}</div>
            </div>
          </div>

          <div class="column is-half">

            <div>
              <h1><strong> INTERIMAIRE </strong></h1>
            </div><hr id="hrInterimaire"><br>

            <div class="columns">
              <div class="column is-two-fifth has-text-left"> Nom et Prénom : </div>
              <div class="column has-text-left">{{interimaire.nom_prenom}}</div>
            </div>

            <div class="columns">
              <div class="column is-two-fifth has-text-left"> Date de naissance : </div>
              <div class="column has-text-left">{{interimaire.dateNaissance}}</div>
            </div>

            <div class="columns">
              <div class="column is-two-fifth has-text-left"> N° Cafat : </div>
              <div class="column has-text-left">{{interimaire.nCafat}}</div>
            </div>

            <div class="columns">
              <div class="column is-one-quarter has-text-left"> Adresse : </div>
              <div class="column has-text-left">{{interimaire.adresseInterimaire}}</div>
            </div>
          </div>
        </div>

      <div class="is-full">

        <div id="mission" class="columns">

          <div class="column is-half">

            <div class="intitulé">
              <h1><strong> Détails et Caractéristiques Particulières </strong></h1>
            </div><hr class="hrMission"><br>

            <div class="columns">
              <div class="column is-two-fifths has-text-left"> Motif du Recours : </div>
              <div class="column has-text-left">{{mission.motifRecours}}</div>
            </div>

            <div class="columns">
              <div class="column is-one-third has-text-left"> Qualification : </div>
              <div class="column has-text-left">{{mission.qualifParticulieres}}</div>
            </div>

            <div class="columns">
              <div class="column is-three-fifths has-text-left"> Risques Professionnels : </div>
              <div class="column has-text-left">{{mission.risquesPro}}</div>
            </div>

            <div class="columns">
              <div class="column is-one-quarter has-text-left"> N°Offre : </div>
              <div class="column has-text-left">{{mission.nOffre}}</div>
            </div>

            <div class="columns">
              <div class="column is-one-quarter has-text-left"> Durée : </div>
              <div class="column has-text-left">Du : {{mission.debutMission}}</div>
              <div class="column has-text-left">Au : {{mission.finMission}}</div>
            </div>

            <div class="columns">
              <div class="column is-two-fifth has-text-left"> Horaires de Travail : </div>
              <div class="column has-text-left">{{mission.horairesTravail}}</div>
            </div>

            <div class="columns">
              <div class="column is-three-fifths has-text-left"> Periode d'Essai : </div>
              <div class="column has-text-right">{{mission.periodEssai}}</div>
              <div class="column has-text-right">{{mission.nbJoursEssai}}</div>
            </div>
          </div>

          <div class="column is-half">

            <div class="intitulé">
              <h1><strong> Rémunération de Référence </strong></h1>
            </div><hr class="hrMission"><br>

            <div class="columns">
              <div class="column is-two-left has-text-left"> Nombre d'Heures : </div>
              <div class="column has-text-right">{{mission.nbHeures}}/Heures</div>
            </div>

            <div class="columns">
              <div class="column is-two-left has-text-left"> Taux horaire :  </div>
              <div class="column has-text-right">{{mission.tauxHoraire}} F.XPF</div>
            </div>

            <div class="columns">
              <div class="column is-two-left has-text-left"> Salaire de base :  </div>
              <div class="column has-text-right">{{mission.baseSalaire}} F.XPF</div>
            </div>

            <div class="columns">
              <div class="column is-two-left has-text-left"> Prime Précarité : </div>
              <div class="column has-text-right">{{mission.primePreca}}%</div>
            </div>

            <div class="columns">
              <div id="congesPayes" class="column is-two-left has-text-left"> Congés Payés : </div>
              <div class="column has-text-right">{{mission.congesPayes}}%</div>
            </div>

            <div class="columns">
              <div class="column is-three-fifths has-text-left"> Heures supplémentaires : </div>
              <div class="column has-text-right">{{mission.heureSupp}}</div>
            </div>

            <div class="columns">
              <div class="column is-three-fifths has-text-left"> Condition de Règlement : </div>
              <div class="column has-text-right">{{mission.conditionReglement}}</div>
            </div>
          </div>
        </div><hr class="tiret"><br>

        <div class="columns">
          <div id="mention" class="column is-two-fifths"><p></p></div>
          <div id="where" class="column has-text-left"><p>Fait à          </p></div>
          <div id="when" class="column has-text-left"><p>le         </p></div>
        </div><hr id="hrSign">

        <div class="columns" id="ccSignature">
          <div class="column is-half"><p>Cachet et Signature de l'utilisateur</p></div>
          <div class="column"><p>Cachet et Signature de PARTNERS INTERIM</p></div>
        </div>

        <hr class="tiret">

        <div class="is-full has-text-centered" id="agenceID">
          <p>{{agence.agenceID}}</p>
        </div>

      </div>
    </div>
  </div>
</template>


<script>

export default {
  data: () => {
    return {
      agence: {
        agenceInterim: "PARTNERS INTERIM",
        adresseAgence: "224 rue Iekawe - PK6 - Centre commercial Belle Vie",
        telAgence: "TEL : 24.94.66 / FAX : 28.94.66",
        agenceID: "PARTNERS INTERIM SARL au capital de 4.000.000 FCFP - BP 30668 98895 NOUMEA CEDEX - Ridet 854372-001 Garantie financière BNC Ducos",
      },
      interimaire: {
        nom_prenom: "",
        dateNaissance: "",
        adresseInterimaire: "",
        nCafat: "",
      },
      client: {
        raisonSociale: "",
        adresseClient: "zdddddddddddddddd dddddddddddd ddddddddddddd dddddddd ddddddddddd ddddddddddd ddddddddddd dddddddddd dddddddddd dddddddd",
        representePar: "",
        personneDemander: "",
        lieuActivite: "",
        telephoneClient: "",
      },
      mission: {
        refContrat: "",
        motifRecours: "",
        qualifParticulieres: "",
        debutMission: "",
        finMission: "",
        risquesPro: "",
        periodEssai: "", nbJoursEssai: "",
        nOffre: "",
        horaireTravail: "",
        heureSupp: "",
        nbHeures: "",
        tauxHoraire: "",
        baseSalaire: "",
        primePreca: "",
        congesPayes: "",
        conditionReglement: ""
      }
    }
  }
}
</script>

<style scoped>

/* ajout des br pour créer des sauts de ligne plutot que de styliser en marge partout dans le css */

/* background de distinction avec le  format A4 */


/*Dimension A4 */
.page {
  background: rgb(255, 255, 255);
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
}
.page[size="A4"] {
  width: 21cm;
  height: 29.7cm;
}
.page[size="A4"][layout="portrait"] {
  width: 29.7cm;
  height: 21cm;
}

/* Marge sur les DIV du sujet et des Details de Mission, plus espace entre les textes */
#sujet, #mission {
  margin-left: 0px;
  margin-right: 0px;
  line-height: 0.9;
}

/* Ligne sur la mention Lu et approuvé et Fait a ''Nouméa'' le ''25/05/2025'' */
#where, #when, #mention {
  line-height: 0;
}

/* Marge sur signature et cachet */
#ccSignature {
  line-height: 2.8;
  margin-bottom: 90px;
}

/* taille de la police de L'identité de l'entreprise dans le footer */
#agenceID {
  font-size: 65%;
}

/* Dimension de l'image */
.img {
  width: 130px;
  height: 120px;
}

/* Liste de style css des différents HR du contrat */
/* HR de l'intérimaire */
#hrInterimaire {
    background-color:darkorange;
    height: 2.5px;
    color:darkorange;
    margin: auto;
    width: 100%;
    border: none;
    margin-top: 5px;
}
/* HR du client */
#hrClient {
    background-color:darkturquoise;
    height: 2.5px;
    color:darkturquoise;
    margin: auto;
    width: 100%;
    border: none;
    margin-top: 5px;
}
/* hr qui des détails et remunération */
.hrMission {
  background-color: rgb(122, 113, 113);
  height: 2.5px;
  color: rgb(121, 113, 113);
  margin: auto;
  width: 100%;
  border: none;
  margin-top: 5px;
}
/* hr qui divise signature et les mentions */
#hrSign {
  height: 1.5px;
  color: rgb(36, 36, 36);
  margin: auto;
  background-color: rgb(36, 36, 36);
  width: 85%;
  border: none;
}
/* hr de séparation full */
.tiret {
  height: 2.1px;
  color: rgb(36, 36, 36);
  margin: auto;
  background-color: rgb(36, 36, 36);
  width: 100%;
  border: none;
}

</style>
