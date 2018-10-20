const languagesModule = require('../src/utils/languages').default
const validateLanguageModule = require('../src/utils/language-validator')

describe('Method getTranslation', () => { 
  it('No locale parameter passed', () => { 
    expect(languagesModule.getTranslation())
      .toMatchObject(languagesModule.languages.en)
  })

  it('Invalid locale parameter passed', () => { 
    expect(languagesModule.getTranslation('xxxx'))
      .toMatchObject(languagesModule.languages.en)
  })

  it('Valid locale parameter passed', () => { 
    expect(languagesModule.getTranslation('de'))
    .toMatchObject(languagesModule.languages.de)
  })
})

describe('Method addLanguage', () => { 
  it('No languages parameter passed', () => { 
    validateLanguageModule.default = jest.fn()
    languagesModule.addLanguage()
    expect(validateLanguageModule.default).toHaveBeenCalledTimes(0)
  })

  it('Invalid language parameter passed', () => { 
    validateLanguageModule.default = jest.fn()
    expect(languagesModule.addLanguage('abc'))
    expect(validateLanguageModule.default).toHaveBeenCalledWith('abc')
  })

  it('Valid language parameter passed', () => { 
    validateLanguageModule.default = jest.fn(() => ['enUK'])
    const newLanguage = {
      enUK: languagesModule.languages.en
    }

    languagesModule.addLanguage(newLanguage)
    expect(validateLanguageModule.default).toHaveBeenCalledTimes(1)
  })
})