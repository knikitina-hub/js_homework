function findValueByKey(companyName, companyObj) {
  if (companyObj.name === companyName) {
      return companyObj;
  }

  if (companyObj.clients && companyObj.clients.length > 0) {
      for (const client of companyObj.clients) {
          const result = findValueByKey(companyName, client);
          if (result) {
              return result;
          }
      }
  }
  if (companyObj.partners && companyObj.partners.length > 0) {
      for (const partner of companyObj.partners) {
          const result = findValueByKey(companyName, partner);
          if (result) {
              return result;
          }
      }
  }

  return null;
}

const company = {
  name: 'Велика Компанія',
  type: 'Головна компанія',
  platform: 'Платформа для продажу квитків',
  sellsSolution: 'Рішення для продажу квитків',
  clients: [
      {
          name: 'Клієнт 1',
          type: 'subCompany',
          uses: 'ПО для продажу квитків',
          sells: 'Рішення для продажу квитків',
          partners: [
              {
                  name: 'Клієнт 1.1',
                  type: 'subSubCompany',
                  uses: 'Рішення для продажу квитків',
                  sells: 'Рішення для продажу квитків',
              },
              {
                  name: 'Клієнт 1.2',
                  type: 'subSubCompany',
                  uses: 'Рішення для продажу квитків',
                  sells: 'Рішення для продажу квитків',
                  partners: [
                      {
                          name: 'Клієнт 1.2.3',
                          type: 'subSubCompany',
                          uses: 'Рішення для продажу квитків',
                          sells: 'Рішення для продажу квитків',
                      }
                  ]
              }
          ]
      },
      {
          name: 'Клієнт 2',
          type: 'subCompany',
          uses: 'ПО для продажу квитків',
          sells: 'Рішення для продажу квитків'
      }
  ]
};
console.log(findValueByKey('Клієнт 1.2.3', company));
