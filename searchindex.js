Search.setIndex({docnames:["api/sdmetrics","api/sdmetrics.constraint","api/sdmetrics.datasets","api/sdmetrics.detection","api/sdmetrics.detection.tabular","api/sdmetrics.detection.tabular.base","api/sdmetrics.detection.tabular.logistic","api/sdmetrics.detection.tabular.svc","api/sdmetrics.efficacy","api/sdmetrics.efficacy.base","api/sdmetrics.statistical","api/sdmetrics.statistical.bivariate","api/sdmetrics.statistical.bivariate.base","api/sdmetrics.statistical.bivariate.continuous","api/sdmetrics.statistical.bivariate.discrete","api/sdmetrics.statistical.univariate","api/sdmetrics.statistical.univariate.base","api/sdmetrics.statistical.univariate.cstest","api/sdmetrics.statistical.univariate.kstest","api/sdmetrics.statistical.utils","authors","contributing","history","index","readme","tutorials/1_getting_started","tutorials/2_writing_metrics","tutorials/3_ml_efficacy"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,nbsphinx:3,sphinx:56},filenames:["api/sdmetrics.rst","api/sdmetrics.constraint.rst","api/sdmetrics.datasets.rst","api/sdmetrics.detection.rst","api/sdmetrics.detection.tabular.rst","api/sdmetrics.detection.tabular.base.rst","api/sdmetrics.detection.tabular.logistic.rst","api/sdmetrics.detection.tabular.svc.rst","api/sdmetrics.efficacy.rst","api/sdmetrics.efficacy.base.rst","api/sdmetrics.statistical.rst","api/sdmetrics.statistical.bivariate.rst","api/sdmetrics.statistical.bivariate.base.rst","api/sdmetrics.statistical.bivariate.continuous.rst","api/sdmetrics.statistical.bivariate.discrete.rst","api/sdmetrics.statistical.univariate.rst","api/sdmetrics.statistical.univariate.base.rst","api/sdmetrics.statistical.univariate.cstest.rst","api/sdmetrics.statistical.univariate.kstest.rst","api/sdmetrics.statistical.utils.rst","authors.rst","contributing.rst","history.rst","index.rst","readme.rst","tutorials/1_getting_started.ipynb","tutorials/2_writing_metrics.ipynb","tutorials/3_ml_efficacy.ipynb"],objects:{"":{sdmetrics:[0,0,0,"-"]},"sdmetrics.Goal":{IGNORE:[0,2,1,""],MAXIMIZE:[0,2,1,""],MINIMIZE:[0,2,1,""]},"sdmetrics.Metric":{description:[0,2,1,""],domain:[0,2,1,""],goal:[0,2,1,""],name:[0,2,1,""],tags:[0,2,1,""],unit:[0,2,1,""],value:[0,2,1,""]},"sdmetrics.MetricsReport":{add_metric:[0,3,1,""],add_metrics:[0,3,1,""],details:[0,3,1,""],highlights:[0,3,1,""],overall:[0,3,1,""],visualize:[0,3,1,""]},"sdmetrics.constraint":{metrics:[1,4,1,""]},"sdmetrics.datasets":{Dataset:[2,1,1,""],list_datasets:[2,4,1,""]},"sdmetrics.datasets.Dataset":{hq_synthetic:[2,2,1,""],load:[2,3,1,""],lq_synthetic:[2,2,1,""],metadata:[2,2,1,""],save:[2,3,1,""],tables:[2,2,1,""]},"sdmetrics.detection":{metrics:[3,4,1,""],tabular:[4,0,0,"-"]},"sdmetrics.detection.tabular":{LogisticDetector:[4,1,1,""],SVCDetector:[4,1,1,""],TabularDetector:[4,1,1,""],base:[5,0,0,"-"],logistic:[6,0,0,"-"],svc:[7,0,0,"-"]},"sdmetrics.detection.tabular.LogisticDetector":{fit:[4,3,1,""],name:[4,2,1,""],predict_proba:[4,3,1,""]},"sdmetrics.detection.tabular.SVCDetector":{fit:[4,3,1,""],name:[4,2,1,""],predict_proba:[4,3,1,""]},"sdmetrics.detection.tabular.TabularDetector":{fit:[4,3,1,""],metrics:[4,3,1,""],name:[4,2,1,""],predict_proba:[4,3,1,""]},"sdmetrics.detection.tabular.base":{TabularDetector:[5,1,1,""]},"sdmetrics.detection.tabular.base.TabularDetector":{fit:[5,3,1,""],metrics:[5,3,1,""],name:[5,2,1,""],predict_proba:[5,3,1,""]},"sdmetrics.detection.tabular.logistic":{LogisticDetector:[6,1,1,""]},"sdmetrics.detection.tabular.logistic.LogisticDetector":{fit:[6,3,1,""],name:[6,2,1,""],predict_proba:[6,3,1,""]},"sdmetrics.detection.tabular.svc":{SVCDetector:[7,1,1,""]},"sdmetrics.detection.tabular.svc.SVCDetector":{fit:[7,3,1,""],name:[7,2,1,""],predict_proba:[7,3,1,""]},"sdmetrics.efficacy":{MLEfficacy:[8,1,1,""],base:[9,0,0,"-"]},"sdmetrics.efficacy.MLEfficacy":{fit:[8,3,1,""],metric_domain:[8,2,1,""],metric_goal:[8,2,1,""],metric_unit:[8,2,1,""],metrics:[8,3,1,""],name:[8,2,1,""],score:[8,3,1,""],target_column_name:[8,2,1,""],target_table_name:[8,2,1,""]},"sdmetrics.efficacy.base":{MLEfficacy:[9,1,1,""]},"sdmetrics.efficacy.base.MLEfficacy":{fit:[9,3,1,""],metric_domain:[9,2,1,""],metric_goal:[9,2,1,""],metric_unit:[9,2,1,""],metrics:[9,3,1,""],name:[9,2,1,""],score:[9,3,1,""],target_column_name:[9,2,1,""],target_table_name:[9,2,1,""]},"sdmetrics.statistical":{bivariate:[11,0,0,"-"],metrics:[10,4,1,""],univariate:[15,0,0,"-"],utils:[19,0,0,"-"]},"sdmetrics.statistical.bivariate":{BivariateMetric:[11,1,1,""],ContinuousDivergence:[11,1,1,""],DiscreteDivergence:[11,1,1,""],base:[12,0,0,"-"],continuous:[13,0,0,"-"],discrete:[14,0,0,"-"],name:[11,2,1,""]},"sdmetrics.statistical.bivariate.BivariateMetric":{dtypes:[11,2,1,""],metric:[11,3,1,""],metrics:[11,3,1,""],name:[11,2,1,""]},"sdmetrics.statistical.bivariate.ContinuousDivergence":{dtypes:[11,2,1,""],metric:[11,3,1,""],name:[11,2,1,""]},"sdmetrics.statistical.bivariate.DiscreteDivergence":{dtypes:[11,2,1,""],metric:[11,3,1,""],name:[11,2,1,""]},"sdmetrics.statistical.bivariate.base":{BivariateMetric:[12,1,1,""],name:[12,2,1,""]},"sdmetrics.statistical.bivariate.base.BivariateMetric":{dtypes:[12,2,1,""],metric:[12,3,1,""],metrics:[12,3,1,""],name:[12,2,1,""]},"sdmetrics.statistical.bivariate.continuous":{ContinuousDivergence:[13,1,1,""]},"sdmetrics.statistical.bivariate.continuous.ContinuousDivergence":{dtypes:[13,2,1,""],metric:[13,3,1,""],name:[13,2,1,""]},"sdmetrics.statistical.bivariate.discrete":{DiscreteDivergence:[14,1,1,""]},"sdmetrics.statistical.bivariate.discrete.DiscreteDivergence":{dtypes:[14,2,1,""],metric:[14,3,1,""],name:[14,2,1,""]},"sdmetrics.statistical.univariate":{CSTest:[15,1,1,""],KSTest:[15,1,1,""],UnivariateMetric:[15,1,1,""],base:[16,0,0,"-"],cstest:[17,0,0,"-"],kstest:[18,0,0,"-"],name:[15,2,1,""]},"sdmetrics.statistical.univariate.CSTest":{dtypes:[15,2,1,""],metric:[15,3,1,""],name:[15,2,1,""]},"sdmetrics.statistical.univariate.KSTest":{dtypes:[15,2,1,""],metric:[15,3,1,""],name:[15,2,1,""]},"sdmetrics.statistical.univariate.UnivariateMetric":{dtypes:[15,2,1,""],metric:[15,3,1,""],metrics:[15,3,1,""],name:[15,2,1,""]},"sdmetrics.statistical.univariate.base":{UnivariateMetric:[16,1,1,""],name:[16,2,1,""]},"sdmetrics.statistical.univariate.base.UnivariateMetric":{dtypes:[16,2,1,""],metric:[16,3,1,""],metrics:[16,3,1,""],name:[16,2,1,""]},"sdmetrics.statistical.univariate.cstest":{CSTest:[17,1,1,""]},"sdmetrics.statistical.univariate.cstest.CSTest":{dtypes:[17,2,1,""],metric:[17,3,1,""],name:[17,2,1,""]},"sdmetrics.statistical.univariate.kstest":{KSTest:[18,1,1,""]},"sdmetrics.statistical.univariate.kstest.KSTest":{dtypes:[18,2,1,""],metric:[18,3,1,""],name:[18,2,1,""]},"sdmetrics.statistical.utils":{frequencies:[19,4,1,""]},sdmetrics:{Goal:[0,1,1,""],Metric:[0,1,1,""],MetricsReport:[0,1,1,""],constraint:[1,0,0,"-"],datasets:[2,0,0,"-"],detection:[3,0,0,"-"],efficacy:[8,0,0,"-"],evaluate:[0,4,1,""],statistical:[10,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function"},terms:{"000000e":25,"015873e":25,"044426e":25,"049823e":25,"075923e":25,"086756e":25,"092660e":25,"0x1233b9e90":25,"100767e":25,"103919e":25,"136991e":25,"141553e":25,"162326e":25,"196438e":25,"201162e":25,"221267e":25,"237272e":25,"246950e":25,"254507e":25,"259047e":25,"266049e":25,"270256e":25,"349454e":25,"355174e":25,"356723e":25,"364360e":25,"367469e":25,"433785e":25,"434418e":25,"500551e":25,"509170e":25,"509650e":25,"606368e":25,"610881e":25,"620263e":25,"631733e":25,"635895e":25,"692481e":25,"723890e":25,"724286e":25,"754742e":25,"796316e":25,"817258e":25,"845909e":25,"853227e":25,"899937e":25,"905500e":25,"906796e":25,"943416e":25,"980783e":25,"case":[19,21],"class":[0,2,4,5,6,7,8,9,11,12,13,14,15,16,17,18,26,27],"default":[0,23,24,25],"enum":0,"export":2,"final":25,"float":[0,8,9,11,12,13,15,16,18,27],"function":[0,1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,21,23,24,25,26,27],"import":[23,24,25,26,27],"int":[11,13,15,18],"new":21,"null":[15,17,18,26],"return":[0,2,4,5,6,7,8,9,11,12,13,14,15,16,17,18,23,24,25,26,27],"static":[2,11,12,13,14,15,16,17,18],"true":[0,23,24,25,26,27],"try":[0,21],"while":21,And:21,For:21,The:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,21,23,24,25,26,27],These:2,Use:25,__init__:21,a_modul:21,abl:[23,24,25],about:[21,27],abs:26,absolut:26,accept:[0,11,12,15,16],access:0,action:21,actual:21,add:[0,19,21],add_metr:[0,26],add_tabl:27,addit:25,adversari:26,after:[21,23,24],agnost:[23,24],ahead:27,all:[0,11,12,15,16,21,25,27],also:[21,25],altern:26,alwai:21,anaconda3:25,ani:21,anyth:21,api:[0,21,23,24,26],appreci:21,appropri:[8,9,21,27],approxim:[11,13],arbitrari:0,area:25,arg:25,argument:[26,27],articl:21,associ:21,assum:21,attach:26,attempt:27,attribut:[0,4,5,6,7,8,9,11,12,13,14,15,16,17,18],auroc:25,avail:[21,27],axi:27,bad:25,base:[0,2,3,4,6,7,8,10,11,13,14,15,17,18,21,26],been:21,befor:21,behavior:21,being:21,below:25,best:21,between:25,bin:[11,13],binari:[4,5,6,7,25,26,27],bit:21,bivari:[0,10,25,26],bivariatemetr:[11,12,13,14],blog:21,blown:21,bool:[11,14,15,17,26],boston:27,boston_housing_pric:27,both:21,branch:21,briefli:21,bugfix:21,build:21,built:[0,2],bump:21,bumpvers:21,call:[21,23,24],can:[0,2,15,17,18,19,21,23,24,25,26],categor:[11,13,15,17,19,26],cdf:[15,18],cfg:21,chang:21,check:[1,21,23,24],checkout:21,chi:[15,17,26],child:[25,26],chisquar:[15,17,25,26],classif:[4,5,6,7,26,27],classifi:[4,6,7,26],clone:[21,23,24],code:[21,23,24],column:[11,12,14,15,16,17,18,25,26,27],com:[21,23,24],combin:21,come:[4,5,6,7,26],command:[21,23,24],comment:21,commit:21,compar:[8,10,15,17,18,23,24,26],compli:21,comput:[0,11,13,15,16,23,24,25],concaten:27,consequ:21,consist:2,constraint:0,contain:[0,11,12,13,14,15,16,17,18,19,21,25,26],continu:[0,10,11,15,18,25],continuousdiverg:[11,13],conveni:21,converg:25,convergencewarn:25,copi:[2,21,25,27],copula:27,core:25,correct:26,correspond:[1,3,10,11,12,13,14,15,16,17,18,21,26],could:21,cover:21,coverag:21,cpi:25,creat:[21,23,26],credit:21,cstest:[0,10,15,26],current:21,custom:[23,27],data:[0,1,2,3,4,5,8,11,12,15,16,19,23,26],databas:[10,11,12,13,14,15,16,17,18,21,23,24,25,26],datafram:[0,1,2,3,4,5,10,11,12,15,16,27],dataset:[0,4,5,6,7,8,9,23,24],date:25,def:[26,27],defin:[15,16,27],demo:[23,24],demonstr:25,denorm:26,depend:21,deprec:25,dept:25,describ:[1,3,10],descript:[0,21,27],detail:[0,21,25],detect:[0,23,25],dev:21,develop:[21,23,24],devn:21,dict:[0,1,2,3,4,5,10,11,12,15,16],dictionari:[0,1,3,4,5,10,11,12,15,16],diff:26,differ:[15,17,18,25,26,27],directori:2,discret:[0,10,11],discretediverg:[11,14],disk:2,distribut:[10,15,17,18,25,26],diverg:[11,13],doc:21,docstr:21,doe:21,domain:[0,11,12,13,14,15,16,17,18,26],don:19,done:21,driven:21,dtype:[11,12,13,14,15,16,17,18,26],each:[4,5,6,7,11,12,14,21],easier:21,edu:20,efficaci:[0,23],either:21,email:20,empir:[15,18],enhanc:21,entri:21,entropi:[0,11,13,25],enumer:0,error:0,especi:25,etc:26,evalu:[0,8,23,24],even:21,everi:21,exampl:25,execut:21,exist:19,expand_dim:27,expect:[11,12,14,15,16,19],experi:2,explain:21,explor:[23,24],f_exp:26,f_ob:26,fail:[21,25],fake:[25,26],fake_t:26,fals:[2,25],far:21,featur:[4,5,6,7,8,9,25,26,27],feel:21,field:[11,12,13,14,15,16,17,18,26],figur:0,file:21,fill:26,filter_func:0,fit:[4,5,6,7,8,9,15,23,24,25,26,27],floatt:[11,12],focu:26,folder:21,follow:[21,23,24],foo:21,foreign:25,fork:21,format:21,free:21,frequenc:[19,26],friendli:0,from:[0,1,2,3,4,5,6,7,10,11,12,13,14,15,16,17,18,21,23,24,25,26,27],fromnumer:25,fuel_pric:25,full:21,further:21,furthermor:25,futur:25,futurewarn:25,gamma:26,gaussianmultivari:27,gener:[0,21,23,24],get:[23,24],getattr:25,git:[21,23,24],github:[21,23,24],githubusernam:21,given:[0,19,21],goal:[0,11,12,13,14,15,16,17,18,25,26],good:15,googl:21,greatli:21,hack:21,handl:[19,26],has:[21,25,27],hashabl:19,have:[21,23,24,25,26],head:[25,27],help:[8,21],here:21,high:[0,2,25,26],higher:0,highlight:[0,25],histori:21,hous:27,housing_prices_predict:27,how:[21,26],howev:27,hq_synthet:2,hyperparamet:25,hypothesi:[15,17,18,26],identifi:26,ignor:[0,8,9],implement:[1,3,4,5,8,9,10,11,15],includ:[0,21],increas:25,index:[23,25],indic:[4,5,15,17,18,21,26],inf:[0,8,9],inlin:25,insid:21,instal:21,install_requir:21,instanc:[0,2,23,24],instead:25,intt:[11,12],involv:21,is_path:2,isholidai:25,issu:21,item:25,iter:[0,11,12,15,16,19,21,25],its:21,just:21,k15z:[23,24],keep:21,kei:[0,25],kevz:25,kind:21,know:27,kolmogorov:[15,18],kstest:[0,10,15,25],kwd:25,lambda:0,last:[21,27],lbfg:25,learn:[3,4,8,9,21,23,24,26],least:21,len:[26,27],let:[23,24,25,27],level:0,lib:25,librari:[2,21,23,24,25],like:21,line:21,linear_model:[25,27],linearregress:27,lint:21,list:[0,2,11,12,15,16,19,21],list_dataset:2,littl:21,load:[2,23,25],load_boston:27,load_demo:[23,24,25],local:21,locat:[2,21],logist:[0,3,4,25],logisticdetector:[4,6],look:[21,25,26],low:2,lq_synthet:2,machin:[3,4,21,23,26],mai:21,major:21,make:[1,21,23,24],mani:21,map:[0,1,2,3,4,5,10,11,12,15,16],markdown1:25,markdown2:25,markdown3:25,markdown4:25,markdown5:25,markdownx:25,master:21,match:[1,11,12,15,16],math:26,matplotlib:[0,25],maxim:[0,25,26],mean:0,measur:11,meet:21,merg:21,metadata:[0,1,2,3,4,5,8,9,10,11,12,15,16,23,24,25,26],method:[0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,21,25],metric:[0,1,3,4,5,8,9,10,11,12,13,14,15,16,17,18,23,24,25,27],metric_domain:[8,9,27],metric_go:[8,9],metric_unit:[8,9,27],metricsreport:[0,23,24,25,26],metricss:0,might:21,minim:[0,25],minor:21,misc:25,mit:20,mkvirtualenv:21,mlefficaci:[8,9,27],mock:21,mode:[23,24],model:[0,4,5,8,9,21,23,24,25,26,27],model_select:27,modul:[0,1,2,3,4,8,10,11,15,21,23],more:[21,23,24],multivari:27,my_custom_metr:26,mycustomefficacymetr:27,name:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21,25,26,27],nan:25,narrow:21,nb_real_row:26,nb_synthetic_row:26,ndarrai:[4,5,6,7,8,9,11,12,13,14,15,16,17,18,26,27],necessari:21,need:27,next:[1,3,4,5,10,11,12,15,16,21],none:[0,21],nonzero:25,normal:21,note:21,now:[21,23,24,25],number:[25,26],numer:[4,5,6,7,8,9,26,27],numpi:[25,27],obj:25,object:[0,1,2,3,4,5,8,9,10,11,12,13,14,15,16,17,18,19,23,24,25,26,27],observ:19,offici:21,old:21,onc:21,one:21,onli:[21,27],open:21,oper:21,optim:25,option:0,order:[11,12,21],origin:21,other:[21,27],our:[21,25],out:[23,24],output:[0,8,9,27],outsid:21,over:[11,12,15,16],overal:[0,23,24,25],own:[21,26],packag:[21,25],page:[21,23],pair:[11,12],panda:27,paramet:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],parent:26,part:21,parti:21,pass:[2,21,25],patch:21,path:[2,21],path_to_dataset:2,percent:19,perform:[11,12,14,15,16,21,25],pip:21,pipelin:[4,6,7,26],place:21,pleas:21,png:25,point:21,poorli:25,possibl:21,post:[21,25],pre:21,predict:[4,5,6,7,27],predict_proba:[4,5,6,7,26],prefix:21,preprocess:26,price:27,print:[25,27],prioriti:[0,25,26],probabl:[4,5,6,7,26],problem:25,procedur:[4,5,8,9],process:21,produc:0,project:21,properli:21,properti:1,propos:21,provid:[0,2,23,24,25],publish:21,push:21,put:21,pvalu:26,pypi:21,pyplot:0,pytest:21,python3:25,python:21,qualiti:[0,2,23,24],quit:25,r_squar:27,random:21,rang:[0,27],read:21,readi:[21,26],real:[0,1,2,3,4,5,8,10,11,12,13,14,15,16,17,18,19,23,24,25,26,27],real_2d:[11,12,14],real_column:[15,16,17,18,26],real_tabl:[0,1,3,4,5,8,9,10,11,12,15,16,23,24,25,26,27],rearrang:27,refer:[21,23,24],regress:[4,6,27],regular:19,reject:[15,17,18,26],rel:[11,13],relat:[1,3,10,25],relationship:26,rememb:21,remov:25,repo:21,report:[0,23,24,25,26],repres:[0,2,11,12,14,15,16],reproduc:21,requir:21,resolv:21,resourc:25,respons:0,result:[15,17,18,26],return_x_i:27,right:21,robust:[4,6,7,26],robustscal:26,root:25,routin:25,row:[4,5,6,7,8,9,25,26,27],run:[21,23,24,27],sampl:[4,5,6,7,11,12,14,15,16,18,27],sample_al:[23,24,25],save:2,savefig:25,scalar:[0,4,6,7,25,26],scale:26,scenario:21,scheme:21,scipi:26,scope:21,score:[0,8,9,23,24,25,27],sdmetric:[21,23,24,26,27],sdv:[0,1,2,3,4,5,10,11,12,15,16,23,24,25,27],search:23,section:21,see:[11,12,14,15,16],select:0,self:[26,27],send:21,separ:21,sequenc:[1,3,4,5,10,26],seri:25,set:[0,1,2,3,10,21,23,24,25,26,27],setup:21,sever:21,shape:27,should:[0,21,23,24],show:[0,25],similar:21,similarli:26,simpl:[23,24],simplest:[25,26],simpli:26,simul:2,sinc:[21,25],singl:[0,4,25,26,27],site:25,size:25,sklearn:[4,6,7,25,26,27],small:[15,17,18,26],smirnov:[15,18],some:[0,21,25,26],some_method:21,sometim:21,soon:26,sourc:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],specif:21,specifi:[0,1,2,26,27],split:21,squar:[0,15,17,26],stabl:21,start:[23,24],stat:26,staticmethod:26,statist:[0,1,23,25],statu:21,step:21,still:27,store:[0,2,25],str:[0,2,11,12,13,14,15,16,17,18,26],string:0,style:21,subclass:26,submodul:[0,3],subset:21,success:[23,24],suggest:[15,17,18,25,26],suit:21,supervis:[8,9],support:[4,7,21,26],sure:[1,21],svc:[0,3,4,26],svcdetector:[4,7,26],svm:26,synthet:[0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,23,24],synthetic_2d:[11,12,14],synthetic_column:[15,16,17,18,26],synthetic_dataset:27,synthetic_t:[0,1,3,4,5,8,9,10,11,12,15,16,23,24,25,26,27],system:21,tabl:[0,1,2,3,4,5,10,11,12,15,16,25,26,27],table_nam:[25,26],tabular:[0,3],tabulardetector:[4,5,6,7,26],tag:[0,21,25,26,27],take:[0,1,3,10],target:[4,5,6,7,8,9,26,27],target_column:27,target_column_nam:[8,9],target_t:27,target_table_nam:[8,9],task:[8,27],temperatur:25,term:19,test:[8,9,11,12,14,15,16,17,18,19,23,24,26,27],test_:21,test_a_modul:21,test_error:21,test_sdmetr:21,test_some_methed_input_non:21,test_some_method_1:21,test_some_method_timeout:21,test_some_method_value_error:21,text:0,than:[2,21],thei:21,them:[0,11,13,21,25],thi:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,23,24,25,26,27],thing:21,third:21,through:[21,27],tier:2,titl:21,to_numpi:25,to_str:25,tool:[21,23,24,25],top:0,train:[4,5,6,7,8,9,26,27],train_test_split:27,transform:[4,5,6,7,8,9,19,26,27],travers:26,travi:21,troubleshoot:21,tune:25,tupl:[0,11,12,13,14,15,16,17,18,26],turn:[11,13],tutori:[23,27],two:[2,10,11,12,14,15,16,17,18,19,26],type:[0,2,4,5,6,7,8,9,11,12,13,14,15,16,17,18,25,26],unemploy:25,unit:[0,11,12,13,14,15,16,17,18,25,26],unittest:21,univari:[0,10,25,26],univariatemetr:[15,16,17,18,26],updat:21,upload:21,use:[0,21,25,26,27],used:[2,19,21],useful:26,user:[0,8,25,26],usernam:21,uses:[15,17,18,26],using:[15,18,21,23,24,25],util:[0,10,26],valid:21,valu:[0,8,9,11,12,13,14,15,16,17,18,19,21,25,26,27],varieti:[23,24],variou:8,vector:[4,7,26],veri:25,verifi:[23,24],version:[21,25],view:21,virtualenv:21,virtualenvwrapp:21,visual:[0,23,24,25],volunt:21,wai:[21,25,26],walmart:25,want:[21,27],web:21,websit:21,weekly_sal:25,welcom:21,were:25,what:[11,12,14,15,16,21],when:[21,27],whenev:21,where:[4,5,19,21,25,27],whether:[0,21],which:[0,1,2,3,4,5,8,9,10,11,12,13,14,15,16,17,18,19,21,23,24,25,26,27],whoever:21,work:21,would:21,write:[23,27],x10:27,x11:27,x12:27,yield:[0,1,3,4,5,10,11,12,15,16,19,26],you:[0,21,23,24,25,26],your:[20,21,25,26],your_name_her:21},titles:["sdmetrics package","sdmetrics.constraint package","sdmetrics.datasets package","sdmetrics.detection package","sdmetrics.detection.tabular package","sdmetrics.detection.tabular.base module","sdmetrics.detection.tabular.logistic module","sdmetrics.detection.tabular.svc module","sdmetrics.efficacy package","sdmetrics.efficacy.base module","sdmetrics.statistical package","sdmetrics.statistical.bivariate package","sdmetrics.statistical.bivariate.base module","sdmetrics.statistical.bivariate.continuous module","sdmetrics.statistical.bivariate.discrete module","sdmetrics.statistical.univariate package","sdmetrics.statistical.univariate.base module","sdmetrics.statistical.univariate.cstest module","sdmetrics.statistical.univariate.kstest module","sdmetrics.statistical.utils module","Credits","Contributing","History","Overview","Overview","Getting Started","Writing Custom Metrics","Machine Learning Efficacy"],titleterms:{base:[5,9,12,16],bivari:[11,12,13,14],bug:21,candid:21,constraint:1,continu:13,contribut:21,creat:27,credit:20,cstest:17,custom:26,data:27,dataset:[2,25,27],detect:[3,4,5,6,7,26],discret:14,document:21,efficaci:[8,9,27],evalu:[25,27],featur:21,feedback:21,fix:21,gener:[25,26,27],get:[21,25],guidelin:21,histori:22,implement:21,indic:23,instal:[23,24],kstest:18,learn:27,load:27,logist:6,machin:27,metadata:27,metric:26,modul:[5,6,7,9,12,13,14,16,17,18,19],overview:[23,24],packag:[0,1,2,3,4,8,10,11,15],pull:21,quickstart:[23,24],releas:21,report:21,request:21,sdmetric:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,25],start:[21,25],statist:[10,11,12,13,14,15,16,17,18,19,26],submit:21,submodul:[4,8,10,11,15],subpackag:[0,3,10],svc:7,synthet:[25,27],tabl:23,tabular:[4,5,6,7],test:21,tip:21,type:21,unit:21,univari:[15,16,17,18],util:19,workflow:21,write:[21,26]}})