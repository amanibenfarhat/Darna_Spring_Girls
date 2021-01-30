import DocumentAssociationPage from "./DocumentAssociationPage";
import DocumentEnfantPage from "./DocumentEnfantPage";
import DocumentEtude from "./DocumentEtude";
import DocumentEtudePage from "./DocumentEtudePage";

export default function InnerPage() {
  return (
    <div>
      <main id="main">
        <section class="breadcrumbs">
          <div class="container">
            <div class="d-flex justify-content-between align-items-center">
              <h2>Documents Page</h2>
              <ol>
                <li>
                  <a href="index.html">Accueil</a>
                </li>
                <li>Documents</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="faq" class="faq section-bg">
          <div class="container">
            <DocumentAssociationPage></DocumentAssociationPage>
            <DocumentEnfantPage></DocumentEnfantPage>
            <DocumentEtudePage></DocumentEtudePage>
          </div>
        </section>
      </main>
    </div>
  );
}
