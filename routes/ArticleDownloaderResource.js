
class ArticleDownloaderResource {

	constructor() {
		this.stopwords = {"A":true,"A'S":true,"ABLE":true,"ABOUT":true,"ABOVE":true,"ACCORDING":true,"ACCORDINGLY":true,"ACROSS":true,"ACTUALLY":true,"AFTER":true,"AFTERWARDS":true,"AGAIN":true,"AGAINST":true,"AIN'T":true,"ALL":true,"ALLOW":true,"ALLOWS":true,"ALMOST":true,"ALONE":true,"ALONG":true,"ALREADY":true,"ALSO":true,"ALTHOUGH":true,"ALWAYS":true,"AM":true,"AMONG":true,"AMONGST":true,"AN":true,"AND":true,"ANOTHER":true,"ANY":true,"ANYBODY":true,"ANYHOW":true,"ANYONE":true,"ANYTHING":true,"ANYWAY":true,"ANYWAYS":true,"ANYWHERE":true,"APART":true,"APPEAR":true,"APPRECIATE":true,"APPROPRIATE":true,"ARE":true,"AREN'T":true,"AROUND":true,"AS":true,"ASIDE":true,"ASK":true,"ASKING":true,"ASSOCIATED":true,"AT":true,"AVAILABLE":true,"AWAY":true,"AWFULLY":true,"B":true,"BE":true,"BECAME":true,"BECAUSE":true,"BECOME":true,"BECOMES":true,"BECOMING":true,"BEEN":true,"BEFORE":true,"BEFOREHAND":true,"BEHIND":true,"BEING":true,"BELIEVE":true,"BELOW":true,"BESIDE":true,"BESIDES":true,"BEST":true,"BETTER":true,"BETWEEN":true,"BEYOND":true,"BOTH":true,"BRIEF":true,"BUT":true,"BY":true,"C":true,"C'MON":true,"C'S":true,"CAME":true,"CAN":true,"CAN'T":true,"CANNOT":true,"CANT":true,"CAUSE":true,"CAUSES":true,"CERTAIN":true,"CERTAINLY":true,"CHANGES":true,"CLEARLY":true,"CO":true,"COM":true,"COME":true,"COMES":true,"CONCERNING":true,"CONSEQUENTLY":true,"CONSIDER":true,"CONSIDERING":true,"CONTAIN":true,"CONTAINING":true,"CONTAINS":true,"CORRESPONDING":true,"COULD":true,"COULDN'T":true,"COURSE":true,"CURRENTLY":true,"D":true,"DEFINITELY":true,"DESCRIBED":true,"DESPITE":true,"DID":true,"DIDN'T":true,"DIFFERENT":true,"DO":true,"DOES":true,"DOESN'T":true,"DOING":true,"DON'T":true,"DONE":true,"DOWN":true,"DOWNWARDS":true,"DURING":true,"E":true,"EACH":true,"EDU":true,"EG":true,"EIGHT":true,"EITHER":true,"ELSE":true,"ELSEWHERE":true,"ENOUGH":true,"ENTIRELY":true,"ESPECIALLY":true,"ET":true,"ETC":true,"EVEN":true,"EVER":true,"EVERY":true,"EVERYBODY":true,"EVERYONE":true,"EVERYTHING":true,"EVERYWHERE":true,"EX":true,"EXACTLY":true,"EXAMPLE":true,"EXCEPT":true,"F":true,"FAR":true,"FEW":true,"FIFTH":true,"FIRST":true,"FIVE":true,"FOLLOWED":true,"FOLLOWING":true,"FOLLOWS":true,"FOR":true,"FORMER":true,"FORMERLY":true,"FORTH":true,"FOUR":true,"FROM":true,"FURTHER":true,"FURTHERMORE":true,"G":true,"GET":true,"GETS":true,"GETTING":true,"GIVEN":true,"GIVES":true,"GO":true,"GOES":true,"GOING":true,"GONE":true,"GOT":true,"GOTTEN":true,"GREETINGS":true,"H":true,"HAD":true,"HADN'T":true,"HAPPENS":true,"HARDLY":true,"HAS":true,"HASN'T":true,"HAVE":true,"HAVEN'T":true,"HAVING":true,"HE":true,"HE'S":true,"HELLO":true,"HELP":true,"HENCE":true,"HER":true,"HERE":true,"HERE'S":true,"HEREAFTER":true,"HEREBY":true,"HEREIN":true,"HEREUPON":true,"HERS":true,"HERSELF":true,"HI":true,"HIM":true,"HIMSELF":true,"HIS":true,"HITHER":true,"HOPEFULLY":true,"HOW":true,"HOWBEIT":true,"HOWEVER":true,"I":true,"I'D":true,"I'LL":true,"I'M":true,"I'VE":true,"IE":true,"IF":true,"IGNORED":true,"IMMEDIATE":true,"IN":true,"INASMUCH":true,"INC":true,"INDEED":true,"INDICATE":true,"INDICATED":true,"INDICATES":true,"INNER":true,"INSOFAR":true,"INSTEAD":true,"INTO":true,"INWARD":true,"IS":true,"ISN'T":true,"IT":true,"IT'D":true,"IT'LL":true,"IT'S":true,"ITS":true,"ITSELF":true,"J":true,"JUST":true,"K":true,"KEEP":true,"KEEPS":true,"KEPT":true,"KNOW":true,"KNOWN":true,"KNOWS":true,"L":true,"LAST":true,"LATELY":true,"LATER":true,"LATTER":true,"LATTERLY":true,"LEAST":true,"LESS":true,"LEST":true,"LET":true,"LET'S":true,"LIKE":true,"LIKED":true,"LIKELY":true,"LITTLE":true,"LOOK":true,"LOOKING":true,"LOOKS":true,"LTD":true,"M":true,"MAINLY":true,"MANY":true,"MAY":true,"MAYBE":true,"ME":true,"MEAN":true,"MEANWHILE":true,"MERELY":true,"MIGHT":true,"MORE":true,"MOREOVER":true,"MOST":true,"MOSTLY":true,"MUCH":true,"MUST":true,"MY":true,"MYSELF":true,"N":true,"NAME":true,"NAMELY":true,"ND":true,"NEAR":true,"NEARLY":true,"NECESSARY":true,"NEED":true,"NEEDS":true,"NEITHER":true,"NEVER":true,"NEVERTHELESS":true,"NEW":true,"NEXT":true,"NINE":true,"NO":true,"NOBODY":true,"NON":true,"NONE":true,"NOONE":true,"NOR":true,"NORMALLY":true,"NOT":true,"NOTHING":true,"NOVEL":true,"NOW":true,"NOWHERE":true,"O":true,"OBVIOUSLY":true,"OF":true,"OFF":true,"OFTEN":true,"OH":true,"OK":true,"OKAY":true,"OLD":true,"ON":true,"ONCE":true,"ONE":true,"ONES":true,"ONLY":true,"ONTO":true,"OR":true,"OTHER":true,"OTHERS":true,"OTHERWISE":true,"OUGHT":true,"OUR":true,"OURS":true,"OURSELVES":true,"OUT":true,"OUTSIDE":true,"OVER":true,"OVERALL":true,"OWN":true,"P":true,"PARTICULAR":true,"PARTICULARLY":true,"PER":true,"PERHAPS":true,"PLACED":true,"PLEASE":true,"PLUS":true,"POSSIBLE":true,"PRESUMABLY":true,"PROBABLY":true,"PROVIDES":true,"Q":true,"QUE":true,"QUITE":true,"QV":true,"R":true,"RATHER":true,"RD":true,"RE":true,"REALLY":true,"REASONABLY":true,"REGARDING":true,"REGARDLESS":true,"REGARDS":true,"RELATIVELY":true,"RESPECTIVELY":true,"RIGHT":true,"S":true,"SAID":true,"SAME":true,"SAW":true,"SAY":true,"SAYING":true,"SAYS":true,"SECOND":true,"SECONDLY":true,"SEE":true,"SEEING":true,"SEEM":true,"SEEMED":true,"SEEMING":true,"SEEMS":true,"SEEN":true,"SELF":true,"SELVES":true,"SENSIBLE":true,"SENT":true,"SERIOUS":true,"SERIOUSLY":true,"SEVEN":true,"SEVERAL":true,"SHALL":true,"SHE":true,"SHOULD":true,"SHOULDN'T":true,"SINCE":true,"SIX":true,"SO":true,"SOME":true,"SOMEBODY":true,"SOMEHOW":true,"SOMEONE":true,"SOMETHING":true,"SOMETIME":true,"SOMETIMES":true,"SOMEWHAT":true,"SOMEWHERE":true,"SOON":true,"SORRY":true,"SPECIFIED":true,"SPECIFY":true,"SPECIFYING":true,"STILL":true,"SUB":true,"SUCH":true,"SUP":true,"SURE":true,"T":true,"T'S":true,"TAKE":true,"TAKEN":true,"TELL":true,"TENDS":true,"TH":true,"THAN":true,"THANK":true,"THANKS":true,"THANX":true,"THAT":true,"THAT'S":true,"THATS":true,"THE":true,"THEIR":true,"THEIRS":true,"THEM":true,"THEMSELVES":true,"THEN":true,"THENCE":true,"THERE":true,"THERE'S":true,"THEREAFTER":true,"THEREBY":true,"THEREFORE":true,"THEREIN":true,"THERES":true,"THEREUPON":true,"THESE":true,"THEY":true,"THEY'D":true,"THEY'LL":true,"THEY'RE":true,"THEY'VE":true,"THINK":true,"THIRD":true,"THIS":true,"THOROUGH":true,"THOROUGHLY":true,"THOSE":true,"THOUGH":true,"THREE":true,"THROUGH":true,"THROUGHOUT":true,"THRU":true,"THUS":true,"TO":true,"TOGETHER":true,"TOO":true,"TOOK":true,"TOWARD":true,"TOWARDS":true,"TRIED":true,"TRIES":true,"TRULY":true,"TRY":true,"TRYING":true,"TWICE":true,"TWO":true,"U":true,"UN":true,"UNDER":true,"UNFORTUNATELY":true,"UNLESS":true,"UNLIKELY":true,"UNTIL":true,"UNTO":true,"UP":true,"UPON":true,"US":true,"USE":true,"USED":true,"USEFUL":true,"USES":true,"USING":true,"USUALLY":true,"UUCP":true,"V":true,"VALUE":true,"VARIOUS":true,"VERY":true,"VIA":true,"VIZ":true,"VS":true,"W":true,"WANT":true,"WANTS":true,"WAS":true,"WASN'T":true,"WAY":true,"WE":true,"WE'D":true,"WE'LL":true,"WE'RE":true,"WE'VE":true,"WELCOME":true,"WELL":true,"WENT":true,"WERE":true,"WEREN'T":true,"WHAT":true,"WHAT'S":true,"WHATEVER":true,"WHEN":true,"WHENCE":true,"WHENEVER":true,"WHERE":true,"WHERE'S":true,"WHEREAFTER":true,"WHEREAS":true,"WHEREBY":true,"WHEREIN":true,"WHEREUPON":true,"WHEREVER":true,"WHETHER":true,"WHICH":true,"WHILE":true,"WHITHER":true,"WHO":true,"WHO'S":true,"WHOEVER":true,"WHOLE":true,"WHOM":true,"WHOSE":true,"WHY":true,"WILL":true,"WILLING":true,"WISH":true,"WITH":true,"WITHIN":true,"WITHOUT":true,"WON'T":true,"WONDER":true,"WOULD":true,"WOULDN'T":true,"X":true,"Y":true,"YES":true,"YET":true,"YOU":true,"YOU'D":true,"YOU'LL":true,"YOU'RE":true,"YOU'VE":true,"YOUR":true,"YOURS":true,"YOURSELF":true,"YOURSELVES":true,"Z":true,"ZERO":true,};
		this.http = require('http');
		this.natural = require('natural');
		this.lemmer = require('lemmer');
		this.TOI = require('./TOI');
		this.resource = require('./resource');
		this.words = require('../models/words');
		this.articles = require('../models/articles');
		this.bigrams = require('../models/bigrams');
		this.const_days_in_months = [31,29,31,30,31,30,31,31,30,31,30,31];
		this.days_in_months = [31,29,31,30,31,30,31,31,30,31,30,31];
		this.month;
		this.date;
		this.d;
		this.cb;
		this.fnc;
		this.limits;
		this.number;
		this.inProgress = true;
	}

	checkdate()
	{
		if(this.inProgress){
			this.date++;
			console.log('next date' , this.date , this.month);
			if(this.month>=this.limits.startMonth && this.month<=this.limits.endMonth){
				var This = this;
				if(this.date<=this.days_in_months[this.month-1])
				{
					//if it is a valid date then get the links of that date
					setImmediate(function(){ //check the use of set immediate
						This.getlinks(This.date,This.month);
					});
				}
				else{
					this.month++;
					this.date = 0;

					// if it is not a valid date then go to next month and start the same procedure again by calling the same function again
					setImmediate(function(){
						This.checkdate();
					});
				}
			}
			else
			{

				console.log("Finish");
				This.cb();
				
			}
		} else {
			this.cb();
		}


	}

	getlinks(date,month)
	{
		if(this.inProgress){

			var This = this;
			this.TOI.getArticleLinks({
				day:date,
				month:month
				//links is the array of links of a specified date
			},function(links){

				function checklinks()
				{
					if(This.inProgress){
						This.number++;
						// If the the index is valid then get the article
						if(This.number<links.length)
						{
							
							setImmediate(function(){
								getarticle();
							});		
						}

						//Else move to the next date
						else
						{
							setImmediate(function(){
								This.checkdate();
							});
						}
					} else {
						This.cb();
					}
				}


				//function to get the articles
				function getarticle()
				{
					if(This.inProgress){

						var ArticleID = date+"-"+month+"-2016/"+This.number;
						This.articles.findOne({ArticleID:ArticleID},function(err,a){
							if(a){
								checklinks();
							} else {
								This.TOI.getArticle(links[This.number],function(data){

									if(data.article != ""){
										//str1 holds the article in the form of a string
										var str1 = data.article;
										//article is a object
										var article = {
											text: str1,
											index: This.number,
											url: links[This.number],
											ArticleID: ArticleID,
											category: data.category,
											date: {
												Day: date,
												Month: month, 
												Year:2016
											}
										}

										//function to save the value of the newly created/updated object
										This.articles(article).save(function(err){
											if(err) throw err;
											This.fnc();
											console.log(ArticleID);
											checklinks();

										});	
									} else {
										checklinks();
									}
									

								});
							}
						});
					} else {
						This.cb();
					}

				}
					
				
				This.number = -1;
				checklinks();

			});
		} else {
			this.cb();
		}

	}

	startDownloading (startDate,endDate,fn,callback){

		this.limits = {
			startMonth: startDate.month,
			endMonth: endDate.month
		};

		this.date = startDate.day-1;
		this.month = startDate.month;

		this.days_in_months = this.const_days_in_months.slice();

		this.days_in_months[endDate.month-1] = endDate.day;
		this.fnc = fn;
		this.cb = callback;
		this.checkdate();

	}

	stopDownloading () {
		this.inProgress = false;
	}

}

module.exports = ArticleDownloaderResource;