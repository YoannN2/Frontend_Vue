<template>
  <div class="page" size="A4">
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
                <p><strong> {{ agence.agenceInterim }} </strong></p><br>
                <p> {{ agence.adresseAgence }}</p>
                <p> {{ agence.telAgence }} </p>
              </div>
            </div>

              <div class="columns">
                <div class="column has-text-centered">
                  <p><strong>CONTRAT DE MISSION / {{ mission.refContrat }}</strong></p>
                </div>
              </div>
          </form>
        </div>
        
        <hr class="hrSep"><br>

        <div class="sujet columns">

          <div class="column is-half">

            <div class="has-text-centered">
              <h1><strong> INTERIMAIRE </strong></h1>
            </div>
            
            <hr class="hrIntitule" style="background-color: darkorange"><br>

            <div class="columns">
              <div id="nom_prenom" class="column is-two-fifth has-text-left"> Nom et Prénom : </div>
              <div class="column has-text-right">{{ interimaire.nom_prenom }}</div>
            </div>

            <div class="columns">
              <div  class="column is-two-fifth has-text-left"> Date de naissance : </div>
              <div class="column has-text-right">{{ interimaire.dateNaissance }}</div>
            </div>

            <div class="columns">
              <div  class="column is-two-fifth has-text-left"> N° Cafat : </div>
              <div class="column has-text-right">{{ interimaire.nCafat }}</div>
            </div>

            <div class="columns">
              <div class="column is-one-quarter has-text-left"> Adresse : </div>
              <div class="column has-text-right">{{ interimaire.adresseInterimaire }}</div>
            </div>
          </div>

          <div class="column is-half">

            <div class="has-text-centered">
              <h1><strong> CLIENT </strong></h1>
            </div>
            
            <hr class="hrIntitule" style="background-color: darkturquoise"><br>

            <div class="columns">
              <div class="column is-two-left has-text-left"> Raison Sociale : </div>
              <div class="column has-text-right">{{ client.raisonSociale }}</div>
            </div>

            <div class="columns">
              <div class="column is-two-left has-text-left"> Représenté par : </div>
              <div class="column has-text-right">{{ client.representePar }}</div>
            </div>

            <div class="columns">
              <div class="column is-two-left has-text-left"> Personne à demander : </div>
              <div class="column has-text-right">{{ client.personneDemander }}</div>
            </div>

            <div class="columns">
              <div class="column is-two-left has-text-left"> Lieu d'activité : </div>
              <div class="column has-text-right">{{ client.lieuActivite }}</div>
            </div>

            <div class="columns">
              <div class="column is-one-quarter has-text-left"> Adresse : </div>
              <div class="column has-text-right">{{ client.adresseClient }}</div>
            </div>
          </div>
        </div>

      <div class="is-full">

        <div class="mission columns">

          <div class="column is-half">

            <div class="has-text-centered">
              <h1><strong> Détails de Mission </strong></h1>
            </div>
            
            <hr class="hrIntitule" style="background-color: darkgrey"><br>

            <div class="columns">
              <div class="column is-one-third has-text-left"> Titre du poste : </div>
              <div class="column has-text-right">{{ mission.titrePoste }}</div>
            </div>

            <div class="columns">
              <div class="column is half has-text-left">Du : {{ mission.debutMission }}</div>
              <div class="column has-text-right">Au : {{ mission.finMission }}</div>
            </div>

            <div class="columns">
              <div class="column is-two-fifths has-text-left"> Motif du Recours : </div>
              <div class="column has-text-right">{{ mission.motifRecours }}</div>
            </div>

            <div class="columns">
              <div class="column is-three-fifths has-text-left"> Risques Professionnels : </div>
              <div class="column has-text-right">{{ mission.risquesPro }}</div>
            </div>

            <div class="columns">
              <div class="column is-one-quarter has-text-left"> N°Offre : </div>
              <div class="column has-text-right">{{ mission.nOffre }}</div>
            </div>

            <div class="columns">
              <div class="column is-two-fifth has-text-left"> Horaires de Travail : </div>
              <div class="column has-text-right">{{ mission.horaireTravail }}</div>
            </div>

            <div class="columns">
              <div class="column is-two-fifths has-text-left"> Periode d'Essai : </div>
              <div class="column has-text-right">{{ mission.periodEssai }} <span v-if="mission.nbJoursEssai">/ {{ mission.nbJoursEssai }} jours</span></div>
            </div>
          </div>

          <div class="column is-half">

            <div class="has-text-centered">
              <h1><strong> Rémunération de Référence </strong></h1>
            </div>
            
            <hr class="hrIntitule" style="background-color: darkgrey"><br>

            <div class="columns">
              <div class="column is-two-left has-text-left"> Nombre d'Heures : </div>
              <div class="column has-text-right">{{ mission.nbHeures }} / Heures</div>
            </div>

            <div class="columns">
              <div class="column is-two-left has-text-left"> Taux horaire :  </div>
              <div class="column has-text-right">{{ mission.tauxHoraire }} F.XPF</div>
            </div>

            <div class="columns">
              <div class="column is-two-left has-text-left"> Salaire de base :  </div>
              <div class="column has-text-right">{{ mission.baseSalaire }} F.XPF</div>
            </div>

            <div class="columns">
              <div class="column is-two-left has-text-left"> Prime Précarité : </div>
              <div class="column has-text-right">{{ mission.primePreca }} %</div>
            </div>

            <div class="columns">
              <div class="column is-two-left has-text-left"> Congés Payés : </div>
              <div class="column has-text-right">{{ mission.congesPayes }} %</div>
            </div>

            <div class="columns">
              <div class="column is-three-fifths has-text-left"> Heures supplémentaires : </div>
              <div class="column has-text-right">{{ mission.heureSupp }}</div>
            </div>

          </div>
        </div>

        <hr class="hrSep"> <br>

        <div class="columns ">
          <div class="lieuDate column is-three-fifths has-text-centered"><p>Fait à</p></div>
          <div class="lieuDate column has-text-left"><p>le</p></div>
        </div>

        <hr class="hrSep">

        <div class="signatureParties columns">
          <p class="column is-half has-text-centered">Signature du Salarié</p>
          <p class="column">Cachet et Signature de PARTNERS INTERIM</p>
        </div>

        <hr class="hrSep">

        <div class="agenceID is-full has-text-centered myFooter">
          <p>{{ agence.agenceID }}</p>
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
        nom_prenom: "John Doe",
        dateNaissance: "01/01/1000",
        adresseInterimaire: "224 rue Iekawe - PK6 - Centre commercial Belle Vie",
        nCafat: "1234567",
      },
      client: {
        raisonSociale: "SARL",
        adresseClient: "224 rue Iekawe - PK6 - Centre commercial Belle Vie",
        representePar: "Bob  l'eponge",
        personneDemander: "Robert Nelson",
        lieuActivite: "NOUMEA",
      },
      mission: {
        refContrat: "M09/09/0999",
        motifRecours: "Surcroit activité",
        titrePoste: "Responsable aquaponey",
        debutMission: "01/01/1000",
        finMission: "01/01/1000",
        risquesPro: "NEANT",
        periodEssai: "NEANT",
        nbJoursEssai: "",
        nOffre: "12345",
        horaireTravail: "selon planning",
        heureSupp: "Oui",
        nbHeures: "169",
        tauxHoraire: "926,44",
        baseSalaire: "150.000",
        primePreca: "15",
        congesPayes: "10",
      }
    }
  }
}
</script>
<style scoped>
/* ajout des br pour créer des sauts de ligne plutot que de styliser en marge partout dans le css */

/*Dimension A4 */
.page {
  background: white;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
}

.page[size="A4"] {
  width: 21cm;
  height: 29.7cm;
}

/* Marge sur les DIV du sujet et des Details de Mission, plus espace entre les textes */
.sujet, .mission {
  margin-left: 0px;
  margin-right: 0px;
  line-height: 1;
}

/* Ligne sur la mention Lu et approuvé et Fait a ''Nouméa'' le ''25/05/2025'' */
.lieuDate {
  line-height: 0;
}

/* Marge sur signature et cachet */
.signatureParties {
  line-height: 2.8;
  padding-bottom: 120px;
}

/* taille de la police de L'identité de l'entreprise dans le footer */
.agenceID {
  padding-top: 15px;
  font-size: 8pt;
}

/* Liste de style css des différents HR du contrat */
/* HR des intitules */

.hrIntitule {
  height: 2.8px;
  margin: auto;
  width: 100%;
  border: none;
  margin-top: 5px;
}
/* hr de séparation full */
.hrSep {
  height: 2.2px;
  color: rgb(36, 36, 36);
  margin: auto;
  background-color: rgb(36, 36, 36);
  width: 97%;
  border: none;
}
</style>
