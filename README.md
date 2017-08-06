# FargeleggUleste

## Fargelegger uleste forum og tråder

For oss som begynner å bli gamle og trege i løken så hender det at de små oransje ikonene som forteller at det er uleste meldinger i et forum / en tråd fort blir litt vanskelige å få øye på - særlig når posisjonen på dem er litt annerledes på sticky tråder enn på vanlige.

Så dermed denne Tampermonkey-greia for Chrome for å lett få en visuell oversikt over hva du har igjen å lese.

Dette er helt sikkert ikke optimalt, men forsøkte å fange både underforum og tråder med én jQuery selector og ser ut til å ha lykkes greit med det.

Sånn ser det ut i forumoversikten:

![alt text](https://github.com/RosenborgSupporterSoftware/FargeleggUleste/raw/master/Forumoversikt.png "Forumoversikt")

Uleste emner inne i et forum:

![alt text](https://github.com/RosenborgSupporterSoftware/FargeleggUleste/raw/master/UlesteEmner.png "Forumoversikt")

Jeg valgte gull som farge fordi det er det jeg forbinder med RBK utenom hvitt og svart. Det er lett å endre scriptet til å bruke en annen farge ved å putte det inn i farge-variabelen. Både fargenavn og heksadesimale koder vil virke så lenge du skriver det i et format som browseren forstår.

