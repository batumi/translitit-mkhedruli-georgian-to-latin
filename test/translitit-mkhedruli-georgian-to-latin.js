/* global assert require */
/*jslint maxlen:140*/
'use strict';

var transliteration = require('../lib/translitit-mkhedruli-georgian-to-latin');
var assert = require('chai').assert;

describe('A Mkhedruli Georgian to IPA transliteration', function() {
  it('should work with common words', function() {
    assert.equal(transliteration('უპრეცედენტო'), 'uprets’edento');
    assert.equal(transliteration('მასშტაბის'), 'masshtabis');
    assert.equal(transliteration('ჰაკათონი'), 'hakat’oni');
    assert.equal(transliteration('ჩატარდება'), 'ch’atardeba');
    assert.equal(transliteration('ორ'), 'or');
    assert.equal(transliteration('დღიანი'), 'dghiani');
    assert.equal(transliteration('შეჯიბრია'), 'shedzibria');
    assert.equal(transliteration('რომელშიც'), 'romelshits’');
    assert.equal(transliteration('პროგრამისტები'), 'programistebi');
    assert.equal(transliteration('დეველოპერები'), 'developerebi');
    assert.equal(transliteration('დიზაინერები'), 'dizainerebi');
    assert.equal(transliteration('და'), 'da');
    assert.equal(transliteration('ინჟინრები'), 'inzhinrebi');
    assert.equal(transliteration('მთელი'), 'mt’eli');
    assert.equal(transliteration('ბათუმი'), 'bat’umi');
    assert.equal(transliteration('საქართველოს'), 'sak’art’velos');
    assert.equal(transliteration('უნივერსიტეტებიდან'), 'universitetebidan');
    assert.equal(transliteration('სკოლებიდან'), 'skolebidan');
    assert.equal(transliteration('მიიღებენ'), 'miigheben');
    assert.equal(transliteration('მონაწილეობას'), 'monatsileobas');
    assert.equal(transliteration('სტუდენტი'), 'studenti');
    assert.equal(transliteration('მოსწავლე'), 'mostsavle');
    assert.equal(transliteration('მსგავსი'), 'msgavsi');
    assert.equal(transliteration('სიდიდის'), 'sididis');
    assert.equal(transliteration('სტუდენტური'), 'studenturi');
    assert.equal(transliteration('ევროპის'), 'evropis');
    assert.equal(transliteration('კონტინენტზე'), 'kontinentze');
    assert.equal(transliteration('პირველია'), 'pirvelia');
    assert.equal(transliteration('შთაბეჭდილება'), 'sht’abechdileba');
  });

  it('should work with facebook kartuli-style', function() {
    assert.equal(transliteration('ჩემი ლამაზი რწალი.ისუპერ კორიწი ისე საგაპაო პოლი.'),
      'ch’emi lamazi rtsali.isuper koritsi ise sagapao poli.');
    assert.equal(transliteration('რა ყალიხაფ უფუფუფ:*:*'), 'ra q’alixap’ up’up’up’:*:*');
    assert.equal(transliteration('ხახახა'), 'xaxaxa');
    assert.equal(transliteration('ხო ვიზამტ მაგას არაა პრობლემა, ახლა უკვე მეწ ჭამოტრია ამ პროეყტმა'),
      'xo vizamt magas araa problema, axla ukve mets chamotria am proeq’tma');
    assert.equal(transliteration('კიიი გავიხსენებ არიფას ნასწავლს'), 'kiii gavixseneb arip’as nastsavls');
  });

  it('should work with dashes', function() {
    assert.equal(transliteration('იგივე-იგივე'), 'igive-igive');
  });

  it('should work with underscores', function() {
    assert.equal(transliteration('იგივე_იგივე'), 'igive_igive');
  });

  it('should transliterate legal texts', function() {
    assert.equal(transliteration('3. საქართველოს უზენაესი სასამართლოს 2009 წლის 18 თებერვლის განჩინება;'), 
      '3. sak’art’velos uzenaesi sasamart’los 2009 tslis 18 t’ebervlis ganch’ineba;');
  });

  it('should support empty and null string', function() {
    assert.equal(transliteration(''), '');
    assert.equal(transliteration(), '');
  });
});
