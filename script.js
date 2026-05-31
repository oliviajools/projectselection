const projects = [
    {
        title: "Bürger Leuchttürme",
        submitter: "Benjamin Balde",
        problem: "Öffentliche Infrastruktur stockt oder fehlt ganz, weil staatliche Strukturen zu langsam oder überlastet sind. Bürger:innen fehlt ein Weg, sichtbar selbst zu handeln statt nur zu fordern.",
        solution: "Plattform, die Bürgergruppen befähigt, sichtbare Großprojekte (Spielplätze, Begegnungsorte, Kleininfrastruktur) komplett über Freiwilligenarbeit und Materialsponsoring umzusetzen. Liefert standardisierte Baupläne, Vermittlung von Sponsoren, juristische Trägervorlagen und Logistik. Jedes umgesetzte Projekt wird Blaupause für das nächste.",
        format: "Plattform plus Pilotprojekte vor Ort",
        target: "Engagierte Bürger:innen in Kommunen, lokale Vereine, Sponsoren aus dem Mittelstand"
    },
    {
        title: "Parteiübergreifendes koordiniertes Netzwerk",
        submitter: "Benjamin Balde",
        problem: "Sinnvolle Anliegen scheitern in einzelnen Parteien an Framing, Ideologie oder fehlender interner Mehrheit, obwohl sie sachlich überall mehrheitsfähig wären.",
        solution: "Netzwerk von kooperierenden Mitgliedern in allen relevanten Parteien. Dieselbe Kernforderung wird parallel in jede Partei eingespeist, jeweils in deren Sprache und Logik. Wirkt von innen gewachsen, erhöht die Chance auf realen Beschluss. Begleitend wissenschaftliche Auswertung der Mechanik.",
        format: "Netzwerk plus zweijähriges Forschungsprojekt mit wissenschaftlicher Begleitung",
        target: "Aktive Mitglieder in Bundestagsparteien, Demokratieforschung, Journalismus"
    },
    {
        title: "Problemsammler",
        submitter: "Max Windhagen",
        problem: "Der öffentliche Diskurs in Deutschland orientiert sich an Talkshowthemen und Schlagzeilen, nicht an dem, was Menschen tatsächlich bewegt. Es gibt keine offene, exportierbare Datenbasis dafür.",
        solution: "Bestehende Plattform (problemsammler.benjaminbalde.com) ausbauen. Bürger:innen beschreiben Probleme, schlagen Lösungen vor, diskutieren konstruktiv. Strukturiert nach Kategorien, sortierbar, mit Export in JSON, CSV und RSS. Wird Grundinfrastruktur, auf der andere Initiativen aufsetzen können.",
        format: "Vorhandene Plattform plus Reichweitenausbau und Integration in andere Projekte",
        target: "Bürger:innen, Journalismus, Forschung, Politik, andere Initiativen aus H36"
    },
    {
        title: "AI Bildung für Jugend",
        submitter: "Ana",
        problem: "KI entwickelt sich mit zunehmender Geschwindigkeit und es zeichnet sich als die Kernkompetenz der kommenden Jahre ab. Um als Land nicht abgehängt zu werden ist es essenziell, dass die empfangsbereite Jugend so schnell wie möglich, flächendeckend zu diesem Thema eine Basisausbildung erhält.",
        solution: "Online Bildungsprogramme + gezielte Marketingmaßnahmen, womöglich politische Kampagne oder Initiative um sicherzustellen, dass KI Teil des Lehrplans wird. Anreize schaffen —> Vorteile für Absolventen für Praktika bei Unternehmen durch eine Plattform, die Absolventen und Unternehmen zur Verfügung gestellt wird.",
        format: "Startup; Lobbyismus, Politisches Engagement im Bildungsbereich",
        target: "Schüler, Lehrkräfte, Politiker"
    },
    {
        title: "Deutschland-Kompass 2036",
        submitter: "Florian Wendler",
        problem: "Der Zustand Deutschlands wird häufig emotional, parteipolitisch oder anhand einzelner Schlagzeilen bewertet. Es fehlt ein verständlicher, jährlich aktualisierter Gesamtüberblick, der zentrale gesellschaftliche Entwicklungen datenbasiert zusammenführt.",
        solution: "Aufbau eines jährlichen Gesellschaftsindex für Deutschland mit einem Gesamtscore von 1 bis 100. Der Score setzt sich aus transparent gewichteten Subkategorien zusammen. Zusätzlich wird jährlich ein kompakter Lagebericht veröffentlicht. Der Index soll als strategischer Radar dienen.",
        format: "Jährlicher Index plus kurzer Lagebericht, öffentliches Dashboard und daraus abgeleitete Projektpipeline",
        target: "H36-Projektteams, Öffentlichkeit, Medien, Politik, Verwaltung, Wissenschaft, Stiftungen, junge Generation"
    },
    {
        title: "Lebensführerschein",
        submitter: "Florian Wendler",
        problem: "Viele junge Menschen verlassen Schule oder Ausbildung, ohne zentrale Alltagskompetenzen wirklich gelernt zu haben: Steuern, Versicherungen, Mietvertrag, BAföG, Gehaltsabrechnung, Altersvorsorge, Behördengänge, Arbeitsrecht, politische Beteiligung, Medienkompetenz oder Umgang mit KI.",
        solution: "H36 entwickelt ein praxisnahes Bildungsformat für junge Menschen zwischen ca. 16 und 25 Jahren. In kurzen Modulen werden die wichtigsten Life Skills vermittelt: Finanzen, Wohnen, Arbeit, Staat & Behörden, Demokratie, digitale Selbstverteidigung, KI-Kompetenz und mentale Resilienz.",
        format: "Workshopreihe plus digitale Lernplattform, Vorlagen, Checklisten und Zertifikat",
        target: "Schüler:innen, Auszubildende, Studierende, Berufseinsteiger:innen, Schulen, Berufsschulen, Hochschulen, Jugendorganisationen, Stiftungen, Kommunen"
    },
    {
        title: "Verwaltungssprint",
        submitter: "Florian Wendler",
        problem: "Viele Bürger:innen erleben den Staat im Alltag als langsam, kompliziert und unverständlich. Probleme mit Behörden, Formularen, Wartezeiten oder digitalen Verwaltungsprozessen werden zwar häufig beklagt, aber selten systematisch in konkrete Verbesserungsvorschläge übersetzt.",
        solution: "H36 startet öffentliche Verwaltungssprints. Pro Halbjahr wird ein konkreter Verwaltungsprozess ausgewählt. Das Team analysiert den Prozess aus Bürgerperspektive, sammelt echte Erfahrungsberichte und entwickelt einen konkreten Verbesserungsvorschlag.",
        format: "Öffentliche Challenge plus Bürgerbeteiligung, Prozessanalyse, kommunaler Pilot und medial verwertbarer Kurzreport",
        target: "Bürger:innen, Kommunen, Verwaltungsmitarbeitende, Lokalpolitik, GovTech-Startups, Medien, Stiftungen"
    },
    {
        title: "Zukunft vor Ort",
        submitter: "Florian Wendler",
        problem: "Viele Innenstädte, Stadtteile und ländliche Orte verlieren an sozialer Qualität: Leerstand, wenig Begegnung zwischen Generationen, abnehmendes Gemeinschaftsgefühl, geringe politische Beteiligung und das Gefühl, dass niemand etwas verändert.",
        solution: "H36 entwickelt ein Format für temporäre lokale Zukunftsorte: Für wenige Wochen wird ein leerstehender Laden, ein Raum in einer Schule, ein Gemeindehaus oder ein öffentlicher Ort in einen sichtbaren Begegnungs- und Projektort verwandelt.",
        format: "Temporärer Pop-up-Ort plus lokales Programm, Bürgerbeteiligung, Projektwerkstatt und öffentliche Abschlusspräsentation",
        target: "Junge Menschen, Bürger:innen vor Ort, Kommunen, lokale Unternehmen, Schulen, Vereine, Initiativen, Stiftungen, lokale Medien, H36-Supporter"
    },
    {
        title: "Kids-Medientrainer",
        submitter: "Olivia Bahr",
        problem: "Kinder sind immer früher mit Medien konfrontiert, ohne bereits in frühen Jahren die nötigen Kompetenzen an die Hand zu bekommen. Reglementierung in Elternhäusern bleibt immer häufiger aus. Dadurch kommt es zu Abhängigkeiten, leichtsinniger Nutzung von Plattformen und dem Verlust des kritischen Hinterfragens.",
        solution: "Eine Kombination aus Online-Plattform/App und Workshop in Grundschulen/Unterstufen der weiterführenden Schulen/Sportvereinen. Thema sind die grundlegenden Kompetenzen des Medienkonsums. Auf der begleitenden Plattform/App gibt es online Module zur Medienbildung.",
        format: "Workshops + begleitende Plattform",
        target: "Grundschulen, weiterführende Schulen, Versicherungen, Lehrkräfte, evt. Sportvereine"
    },
    {
        title: "Kommune sucht Gründer – Bedarfsbasiertes Gründer-Matchmaking",
        submitter: "Vitus",
        problem: "Kommunen (v.a. ländliche) suchen dringend Nachfolger & Gründer für Grundversorgung (Bäcker, Ärzte, Handwerk), aber der Bedarf ist fragmentiert & unsichtbar. Gründungsinteressierte wissen nicht, wo sie gebraucht werden.",
        solution: "Digitale Plattform, auf der Kommunen ihren konkreten Bedarf eintragen (Branchen, Flächen, Förderangebote). Gründungsinteressierte filtern nach Branche, Region & Lebensphase – und finden Orte, die sie aktiv wollen.",
        format: "Web-Plattform mit Kommunen-Backend (Eintragsformular) & öffentlichem Frontend (Filter, Kartenansicht, Bedarfsprofil je Gemeinde)",
        target: "Primär: Gründungsinteressierte 25–45 · Sekundär: Kommunen & Wirtschaftsförderungen als Datengeber"
    },
    {
        title: "AI Literacy ab Klasse 1 – Schulisches Lernmodul für den souveränen Umgang mit Künstlicher Intelligenz",
        submitter: "Vitus",
        problem: "Schüler nutzen KI-Tools täglich, verstehen aber weder wie sie funktionieren noch wie man sie kritisch bewertet. Schulen haben kein strukturiertes, altersgerechtes Angebot – Lehrer fühlen sich oft selbst nicht sicher genug.",
        solution: "Schlankes Web-Tool speziell für Schulen: interaktive, spielerische Lernmodule je Altersstufe (Grundschule, Mittelstufe, Oberstufe). Kein Login für Schüler nötig, Lehrer steuert per einfachem Dashboard.",
        format: "Browser-basiertes Tool (kein App-Download), Lehreransicht + Schüleransicht, offline-fähig für Schulnetzwerke, DSGVO-konform ohne Schülerdaten",
        target: "Primär: Schüler ab Klasse 1–12 · Sekundär: Lehrkräfte als Multiplikatoren, Schulleitungen als Entscheider"
    },
    {
        title: "Regionale CO₂-Zertifikate für deutsche Unternehmen – Onshoring von Klimaschutz",
        submitter: "Vitus",
        problem: "Deutsche Unternehmen kaufen CO₂-Zertifikate aus Afrika oder Südamerika – intransparent, schwer prüfbar, ohne regionalen Mehrwert. Gleichzeitig gibt es in DE unzählige Umweltprojekte die unterfinanziert sind und kein Zertifizierungsvehikel haben.",
        solution: "Plattform die deutsche Umweltprojekte (Landwirte, Naturschutzverbände, Gemeinden) zertifiziert & bündelt. Unternehmen kaufen regionale Credits – günstiger als internationale Offsets, mit lokalem Storytelling & Markenwert.",
        format: "B2B-Plattform: Projektseite mit Zertifizierungsprozess + Unternehmensportal (Kauf, Reporting, Markenmaterial)",
        target: "Primär Käufer: KMU & Mittelstand in DE · Primär Anbieter: Landwirte, Forstbetriebe, Naturschutzprojekte, Kommunen"
    },
    {
        title: "Bürokratiekosten-Rechner – Verwaltungsaufwand sichtbar machen",
        submitter: "Vitus",
        problem: "Bürokratiekosten für Unternehmen & Kommunen sind real aber unsichtbar – niemand weiß konkret was Verwaltungsaufwand pro Jahr in € kostet. Ohne Datenbasis keine politische Dringlichkeit, keine Reformmotivation.",
        solution: "Tool das Unternehmen & Kommunen ihren jährlichen Bürokratieaufwand berechnen lässt – als Komplett-Dashboard: Kosten, Zeitaufwand, Zusammenhänge zwischen Prozessen. Zunächst Pilotierung auf Landesebene, dann skalieren.",
        format: "Web-Dashboard mit Eingabemaske + automatischer Kostenberechnung",
        target: "Primär: Kommunalverwaltungen & KMU · Sekundär: Landespolitik & Wirtschaftsverbände als Datenabnehmer"
    },
    {
        title: "Landarzt-Stipendium 2.0 – Praxisfinanzierung als PE/Franchise-Modell",
        submitter: "Vitus",
        problem: "Landarztmangel wächst dramatisch – bestehende Stipendienprogramme sind unattraktiv, bürokratisch & wenig wirksam. Junge Ärzte scheuen Selbstständigkeit & Investitionsrisiko einer eigenen Praxis.",
        solution: "Privates Finanzierungsmodell mit drei möglichen Ausprägungen: (1) PE/VC-Modell, (2) Anstellungsmodell, (3) Franchise-Modell. Pilotprüfung: Welches Modell hat den stärksten Need & ist regulatorisch umsetzbar?",
        format: "Zunächst: Machbarkeitsstudie & Rechtscheck · Dann: Pilotpraxis mit einem Arzt · Skalierung über Franchise oder Fonds-Struktur",
        target: "Primär: Junge Ärzte in Weiterbildung die Landpraxis anstreben · Sekundär: Kommunen & Landkreise mit Versorgungslücke · Investoren mit Impact-Interesse"
    },
    {
        title: "Solution AI für Gemeinden",
        submitter: "Hanna Flügel",
        problem: "Gemeinden in Deutschland stehen zunehmend vor lokalen Herausforderungen: Wohnungsmangel, Hürden bei der Digitalisierung, Verfehlung der SDG-Ziele und mehr. Dennoch sind es oft Probleme, die auch Andere betreffen oder schon von anderen Gemeinden gelöst worden sind.",
        solution: "Solution AI bietet eine Lösung für Gemeinden, die in Gemeinschaft an der Lösung eines lokalen Problems arbeiten möchten. Als AI-basierte Suchmaschine verbindet sie diese Gemeinde mit Anderen die das gleiche Problem haben oder schonmal hatten.",
        format: "Prototyp aus Hackathon an der Hertie School Berlin (Social Impact Award)",
        target: "Vertreter/ Mitarbeiter von deutschen Gemeinden, ggf. Bertelsmannstiftung"
    }
];

class ScoringApp {
    constructor() {
        this.currentProjectIndex = 0;
        this.currentRatings = [0, 0, 0, 0, 0];
        this.allScores = [];
        this.responsesPerProject = 9;
        this.currentResponses = 0;
        this.projectScores = [];
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.loadProject(0);
    }
    
    setupEventListeners() {
        const ratingBtns = document.querySelectorAll('.rating-btn');
        ratingBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleRatingClick(e));
        });
        
        document.getElementById('submit-btn').addEventListener('click', () => this.handleSubmit());
        document.getElementById('next-btn').addEventListener('click', () => this.handleNext());
        document.getElementById('restart-btn').addEventListener('click', () => this.handleRestart());
    }
    
    loadProject(index) {
        const project = projects[index];
        
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-submitter').textContent = project.submitter;
        document.getElementById('project-problem').textContent = project.problem;
        document.getElementById('project-solution').textContent = project.solution;
        document.getElementById('project-format').textContent = project.format;
        document.getElementById('project-target').textContent = project.target;
        
        document.getElementById('current-project').textContent = index + 1;
        document.getElementById('progress-fill').style.width = `${((index) / projects.length) * 100}%`;
        
        this.resetRatings();
        this.currentResponses = 0;
        this.projectScores = [];
        document.getElementById('responses-count').textContent = '0';
    }
    
    resetRatings() {
        this.currentRatings = [0, 0, 0, 0, 0];
        document.querySelectorAll('.rating-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        document.getElementById('submit-btn').disabled = true;
    }
    
    handleRatingClick(e) {
        const btn = e.target;
        const value = parseInt(btn.dataset.value);
        const dimension = btn.closest('.dimension');
        const dimensionIndex = parseInt(dimension.id.split('-')[1]);
        
        const buttonsInDimension = dimension.querySelectorAll('.rating-btn');
        buttonsInDimension.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        
        this.currentRatings[dimensionIndex] = value;
        this.updateSubmitButton();
    }
    
    updateSubmitButton() {
        const allRated = this.currentRatings.every(rating => rating !== 0);
        document.getElementById('submit-btn').disabled = !allRated;
    }
    
    handleSubmit() {
        this.projectScores.push([...this.currentRatings]);
        this.currentResponses++;
        document.getElementById('responses-count').textContent = this.currentResponses;
        
        this.resetRatings();
        
        if (this.currentResponses >= this.responsesPerProject) {
            this.showResults();
        }
    }
    
    showResults() {
        const averages = this.calculateAverages();
        const totalScore = averages.reduce((a, b) => a + b, 0);
        
        document.getElementById('results-project-title').textContent = projects[this.currentProjectIndex].title;
        document.getElementById('total-score').textContent = totalScore.toFixed(1);
        
        for (let i = 0; i < 5; i++) {
            document.getElementById(`dim-${i}`).textContent = averages[i].toFixed(1);
        }
        
        this.allScores.push({
            projectIndex: this.currentProjectIndex,
            title: projects[this.currentProjectIndex].title,
            averages: averages,
            totalScore: totalScore
        });
        
        document.getElementById('project-view').classList.add('hidden');
        document.getElementById('results-view').classList.remove('hidden');
    }
    
    calculateAverages() {
        const sums = [0, 0, 0, 0, 0];
        
        this.projectScores.forEach(scores => {
            for (let i = 0; i < 5; i++) {
                sums[i] += scores[i];
            }
        });
        
        return sums.map(sum => sum / this.projectScores.length);
    }
    
    handleNext() {
        this.currentProjectIndex++;
        
        if (this.currentProjectIndex >= projects.length) {
            this.showFinalResults();
        } else {
            document.getElementById('results-view').classList.add('hidden');
            document.getElementById('project-view').classList.remove('hidden');
            this.loadProject(this.currentProjectIndex);
        }
    }
    
    showFinalResults() {
        document.getElementById('results-view').classList.add('hidden');
        document.getElementById('final-results-view').classList.remove('hidden');
        
        const allResultsContainer = document.getElementById('all-results');
        allResultsContainer.innerHTML = '';
        
        const sortedScores = [...this.allScores].sort((a, b) => b.totalScore - a.totalScore);
        
        sortedScores.forEach((score, index) => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            
            const dimensionNames = ['Impact', 'Machbarkeit', 'Werte-Tiefe', 'Hebelwirkung', 'Sichtbarkeit'];
            
            let detailsHTML = '<div class="result-details">';
            score.averages.forEach((avg, i) => {
                detailsHTML += `
                    <div class="result-detail">
                        <span>${dimensionNames[i]}</span>
                        <span>${avg.toFixed(1)}</span>
                    </div>
                `;
            });
            detailsHTML += '</div>';
            
            resultItem.innerHTML = `
                <h3>${index + 1}. ${score.title}</h3>
                <div class="result-score">${score.totalScore.toFixed(1)} / 25</div>
                ${detailsHTML}
            `;
            
            allResultsContainer.appendChild(resultItem);
        });
        
        document.getElementById('progress-fill').style.width = '100%';
    }
    
    handleRestart() {
        this.currentProjectIndex = 0;
        this.allScores = [];
        this.currentResponses = 0;
        this.projectScores = [];
        
        document.getElementById('final-results-view').classList.add('hidden');
        document.getElementById('project-view').classList.remove('hidden');
        
        this.loadProject(0);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new ScoringApp();
});
