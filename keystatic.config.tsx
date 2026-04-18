import { config, fields, singleton } from '@keystatic/core'

function serviceSchema() {
  return {
    title: fields.text({ label: 'Seitentitel' }),
    subtitle: fields.text({ label: 'Untertitel (Hero)' }),
    intro: fields.array(
      fields.text({ label: 'Absatz', multiline: true }),
      { label: 'Einleitungstexte', itemLabel: (props) => props.value.slice(0, 50) + '…' }
    ),
    indications: fields.array(
      fields.text({ label: 'Indikation' }),
      { label: 'Indikationen / Anwendungsbereiche', itemLabel: (props) => props.value }
    ),
    benefits: fields.array(
      fields.object({
        title: fields.text({ label: 'Titel' }),
        desc: fields.text({ label: 'Beschreibung', multiline: true }),
      }),
      { label: 'Vorteile', itemLabel: (props) => props.fields.title.value }
    ),
    process: fields.array(
      fields.object({
        step: fields.text({ label: 'Schritt' }),
        desc: fields.text({ label: 'Beschreibung', multiline: true }),
      }),
      { label: 'Ablauf', itemLabel: (props) => props.fields.step.value }
    ),
  }
}

export default config({
  storage: process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_CLIENT_ID
    ? {
        kind: 'github',
        repo: {
          owner: 'danielloos36',
          name: 'fortis-salutis',
        },
      }
    : { kind: 'local' },
  ui: {
    brand: { name: 'Fortis Salutis' },
  },
  singletons: {
    home: singleton({
      label: 'Startseite',
      path: 'content/pages/home',
      format: { data: 'json' },
      schema: {
        heroSubtitle: fields.text({
          label: 'Hero – Untertitel',
          description: 'Text unter der Hauptüberschrift im Hero-Banner',
          multiline: false,
        }),
        leistungenCards: fields.array(
          fields.object({
            title: fields.text({ label: 'Titel' }),
            desc: fields.text({ label: 'Beschreibung', multiline: true }),
          }),
          { label: 'Leistungen-Karten', itemLabel: (props) => props.fields.title.value }
        ),
        ueberUnsText1: fields.text({
          label: 'Über uns – Absatz 1',
          multiline: true,
        }),
        ueberUnsText2: fields.text({
          label: 'Über uns – Absatz 2',
          multiline: true,
        }),
        hausbesucheTeaserText: fields.text({
          label: 'Hausbesuche-Teaser – Text',
          multiline: true,
        }),
        einzugsgebietText: fields.text({
          label: 'Einzugsgebiet – Text',
          multiline: true,
        }),
        kontaktText: fields.text({
          label: 'Kontakt – Einleitungstext',
          multiline: true,
        }),
      },
    }),

    hausbesuche: singleton({
      label: 'Leistung: Hausbesuche',
      path: 'content/pages/hausbesuche',
      format: { data: 'json' },
      schema: {
        introText1: fields.text({ label: 'Einleitung – Absatz 1', multiline: true }),
        introText2: fields.text({ label: 'Einleitung – Absatz 2', multiline: true }),
        introText3: fields.text({ label: 'Einleitung – Absatz 3', multiline: true }),
        indications: fields.array(
          fields.text({ label: 'Zielgruppe' }),
          { label: 'Für wen geeignet?', itemLabel: (props) => props.value }
        ),
        benefits: fields.array(
          fields.object({
            title: fields.text({ label: 'Titel' }),
            desc: fields.text({ label: 'Beschreibung', multiline: true }),
          }),
          { label: 'Vorteile', itemLabel: (props) => props.fields.title.value }
        ),
      },
    }),

    krankengymnastik: singleton({
      label: 'Leistung: Krankengymnastik',
      path: 'content/services/krankengymnastik',
      format: { data: 'json' },
      schema: serviceSchema(),
    }),

    trainingstherapie: singleton({
      label: 'Leistung: Trainingstherapie',
      path: 'content/services/trainingstherapie',
      format: { data: 'json' },
      schema: serviceSchema(),
    }),

    manuelleTherapie: singleton({
      label: 'Leistung: Manuelle Therapie',
      path: 'content/services/manuelle-therapie',
      format: { data: 'json' },
      schema: serviceSchema(),
    }),

    neurologischeTherapie: singleton({
      label: 'Leistung: Neurologische Therapie',
      path: 'content/services/neurologische-therapie',
      format: { data: 'json' },
      schema: serviceSchema(),
    }),
  },
})
