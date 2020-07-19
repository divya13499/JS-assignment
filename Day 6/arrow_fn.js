var ask=(question,yes,no) =>(confirm(question))?yes():no();
ask(`do you agree?`,function(){alert("you agreed");},function(){alert("you canceled the execution.");});