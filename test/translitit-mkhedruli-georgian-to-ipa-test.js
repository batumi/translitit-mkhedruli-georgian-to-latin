/* global assert require */
/*jslint maxlen:140*/
'use strict';

var transliteration = require('../lib/translitit-mkhedruli-georgian-to-ipa');
var assert = require('chai').assert;

describe('A Mkhedruli Georgian to IPA transliteration', function() {
  it('should work with common words', function() {
    assert.equal(transliteration('უპრეცედენტო'), 'upʼretsʰedentʼo');
    assert.equal(transliteration('მასშტაბის'), 'masʃtʼabis');
    assert.equal(transliteration('ჰაკათონი'), 'hakʼatʰoni');
    assert.equal(transliteration('ჩატარდება'), 'tʃʰatʼardeba');
    assert.equal(transliteration('ორ'), 'or');
    assert.equal(transliteration('დღიანი'), 'dɣiani');
    assert.equal(transliteration('შეჯიბრია'), 'ʃedʒibria');
    assert.equal(transliteration('რომელშიც'), 'romelʃitsʰ');
    assert.equal(transliteration('პროგრამისტები'), 'pʼrogramistʼebi');
    assert.equal(transliteration('დეველოპერები'), 'developʼerebi');
    assert.equal(transliteration('დიზაინერები'), 'dizainerebi');
    assert.equal(transliteration('და'), 'da');
    assert.equal(transliteration('ინჟინრები'), 'inʒinrebi');
    assert.equal(transliteration('მთელი'), 'mtʰeli');
    assert.equal(transliteration('საქართველოს'), 'sakʰartʰvelos');
    assert.equal(transliteration('უნივერსიტეტებიდან'), 'universitʼetʼebidan');
    assert.equal(transliteration('სკოლებიდან'), 'skʼolebidan');
    assert.equal(transliteration('მიიღებენ'), 'miiɣeben');
    assert.equal(transliteration('მონაწილეობას'), 'monatsʼileobas');
    assert.equal(transliteration('სტუდენტი'), 'stʼudentʼi');
    assert.equal(transliteration('მოსწავლე'), 'mostsʼavle');
    assert.equal(transliteration('მსგავსი'), 'msgavsi');
    assert.equal(transliteration('სიდიდის'), 'sididis');
    assert.equal(transliteration('სტუდენტური'), 'stʼudentʼuri');
    assert.equal(transliteration('ევროპის'), 'evropʼis');
    assert.equal(transliteration('კონტინენტზე'), 'kʼontʼinentʼze');
    assert.equal(transliteration('პირველია'), 'pʼirvelia');
    assert.equal(transliteration('შთაბეჭდილება'), 'ʃtʰabetʃʼdileba');
  });

  it('should work with facebook kartuli-style', function() {
    assert.equal(transliteration('ჩემი ლამაზი რწალი.ისუპერ კორიწი ისე საგაპაო პოლი.'),
      'tʃʰemi lamazi rtsʼali.isupʼer kʼoritsʼi ise sagapʼao pʼoli.');
    assert.equal(transliteration('რა ყალიხაფ უფუფუფ:*:*'), 'ra q’alixapʰ upʰupʰupʰ:*:*');
    assert.equal(transliteration('ხახახა'), 'xaxaxa');
    assert.equal(transliteration('ხო ვიზამტ მაგას არაა პრობლემა, ახლა უკვე მეწ ჭამოტრია ამ პროეყტმა'),
      'xo vizamtʼ magas araa pʼroblema, axla ukʼve metsʼ tʃʼamotʼria am pʼroeq’tʼma');
    assert.equal(transliteration('კიიი გავიხსენებ არიფას ნასწავლს'), 'kʼiii gavixseneb aripʰas nastsʼavls');
  });

  it('should work with dashes', function() {
    assert.equal(transliteration('იგივე-იგივე'), 'igive-igive');
  });

  it('should work with underscores', function() {
    assert.equal(transliteration('იგივე_იგივე'), 'igive_igive');
  });

  it('should transliterate legal texts', function() {
    assert.equal(transliteration('3. საქართველოს უზენაესი სასამართლოს 2009 წლის 18 თებერვლის განჩინება;'), 
      '3. sakʰartʰvelos uzenaesi sasamartʰlos 2009 tsʼlis 18 tʰebervlis gantʃʰineba;');
  });

  it('should support empty and null string', function() {
    assert.equal(transliteration(''), '');
    assert.equal(transliteration(), '');
  });
});
