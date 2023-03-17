function populate(department_select, semester_select) {
    var dSel = document.getElementById(department_select)
    var sSel = document.getElementById(semester_select)
    sSel.innerHTML = ""
    if (dSel.value == "d1") {
        var optionArray = ['sem1|Sem 1', 'sem2|Sem 2', 'sem3|Sem 3', 'sem4|Sem 4', 'sem5|Sem 5', 'sem6|Sem 6']
    } else if (dSel.value == "d2") {
        var optionArray = ['sem1|Sem 1', 'sem2|Sem 2', 'sem3|Sem 3', 'sem4|Sem 4']
    } else if (dSel.value == "d3") {
        var optionArray = ['sem1|Sem 1', 'sem2|Sem 2', 'sem3|Sem 3', 'sem4|Sem 4', 'sem5|Sem 5', 'sem6|Sem 6', 'sem7|Sem 7', 'sem8|Sem 8']
    } else if (dSel.value == "d4") {
        var optionArray = ['sem1|Sem 1', 'sem2|Sem 2', 'sem3|Sem 3', 'sem4|Sem 4']
    }
    for (var option in optionArray) {
        var pair = optionArray[option].split("|")
        var newOption = document.createElement("option")
        newOption.value = pair[0]
        newOption.innerHTML = pair[1]
        sSel.options.add(newOption)
    }
}