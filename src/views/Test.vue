<template>
    <el-form ref="modifyForm" :model="modifyForm" label-width="80px">
        <el-form-item label="姓名" prop="name">
            <el-input v-model="modifyForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
            <el-input v-model="modifyForm.gender"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
            <el-input v-model="modifyForm.age"></el-input>
        </el-form-item>
        <el-form-item label="民族" prop="nation">
            <el-input v-model="modifyForm.nation"></el-input>
        </el-form-item>
        <el-form-item label="婚姻状况" prop="isMarried">
            <el-radio-group v-model="modifyForm.isMarried">
                <el-radio label="已婚" value=true></el-radio>
                <el-radio label="未婚" value=false></el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="出生地" prop="birthPlace">
            <el-input v-model="modifyForm.birthPlace"></el-input>
        </el-form-item>

        <el-form-item label="入院日期" prop="inPatientDate">
            <el-input v-model="modifyForm.inPatientDate"></el-input>
        </el-form-item>

        <el-form-item label="出院日期" prop="recordDate">
            <el-input v-model="modifyForm.recordDate"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="modify(scope.$index)">修改</el-button>
            <el-button @click="modifyDialog = false">取消</el-button>
        </el-form-item>
    </el-form>

</template>
    <!--<el-container>-->
        <!--<el-aside width="1px"></el-aside>-->
        <!--<el-main style="padding: 0">-->
            <!--<v-app id="dayspan" v-cloak>-->
                <!--<ds-calendar-app ref="app"-->
                                 <!--:calendar="calendar"-->
                                 <!--:read-only="readOnly"-->
                                 <!--@change="saveState">-->

                    <!--<template slot="title">-->
                        <!--DaySpan-->
                    <!--</template>-->

                    <!--<template slot="menuRight">-->
                        <!--<v-btn icon large href="/index">-->
                            <!--<v-avatar size="32px" tile>-->
                                <!--<img src="../assets/icon/function.png" alt="function">-->
                            <!--</v-avatar>-->
                        <!--</v-btn>-->
                    <!--</template>-->

                    <!--<template slot="eventPopover" slot-scope="slotData">-->
                        <!--<ds-calendar-event-popover-->
                                <!--v-bind="slotData"-->
                                <!--:read-only="readOnly"-->
                                <!--@finish="saveState"-->
                        <!--&gt;</ds-calendar-event-popover>-->
                    <!--</template>-->

                    <!--<template slot="eventCreatePopover" slot-scope="{placeholder, calendar, close}">-->
                        <!--<ds-calendar-event-create-popover-->
                                <!--:calendar-event="placeholder"-->
                                <!--:calendar="calendar"-->
                                <!--:close="$refs.app.$refs.calendar.clearPlaceholder"-->
                                <!--@create-edit="$refs.app.editPlaceholder"-->
                                <!--@create-popover-closed="saveState"-->
                        <!--&gt;</ds-calendar-event-create-popover>-->
                    <!--</template>-->

                    <!--<template slot="eventTimeTitle" slot-scope="{calendarEvent, details}">-->
                        <!--<div>-->
                            <!--<v-icon class="ds-ev-icon"-->
                                    <!--v-if="details.icon"-->
                                    <!--size="14"-->
                                    <!--:style="{color: details.forecolor}">-->
                                <!--{{ details.icon }}-->
                            <!--</v-icon>-->
                            <!--<strong class="ds-ev-title">{{ details.title }}</strong>-->
                        <!--</div>-->
                        <!--<div class="ds-ev-description">{{ getCalendarTime( calendarEvent ) }}</div>-->
                    <!--</template>-->

                    <!--<template slot="drawerBottom">-->
                        <!--<div class="pa-3">-->
                            <!--<v-checkbox-->
                                    <!--label="Read Only?"-->
                                    <!--v-model="readOnly"-->
                            <!--&gt;</v-checkbox>-->
                        <!--</div>-->
                    <!--</template>-->

                <!--</ds-calendar-app>-->

            <!--</v-app>-->
        <!--</el-main>-->
    <!--</el-container>-->
<!--</template>-->

<!--<script>-->
    <!--import { Calendar, Weekday, Month } from 'dayspan';-->
    <!--import Vue from 'vue';-->


    <!--export default {-->

        <!--name: 'app',-->

        <!--data: () => ({-->
            <!--storeKey: 'dayspanState',-->
            <!--calendar: Calendar.months(),-->
            <!--readOnly: false,-->
            <!--defaultEvents: [-->
                <!--{-->
                    <!--data: {-->
                        <!--title: 'Weekly Meeting',-->
                        <!--color: '#3F51B5'-->
                    <!--},-->
                    <!--schedule: {-->
                        <!--dayOfWeek: [Weekday.MONDAY],-->
                        <!--times: [9],-->
                        <!--duration: 30,-->
                        <!--durationUnit: 'minutes'-->
                    <!--}-->
                <!--},-->
                <!--{-->
                    <!--data: {-->
                        <!--title: 'First Weekend',-->
                        <!--color: '#4CAF50'-->
                    <!--},-->
                    <!--schedule: {-->
                        <!--weekspanOfMonth: [0],-->
                        <!--dayOfWeek: [Weekday.FRIDAY],-->
                        <!--duration: 3,-->
                        <!--durationUnit: 'days'-->
                    <!--}-->
                <!--},-->
                <!--{-->
                    <!--data: {-->
                        <!--title: 'End of Month',-->
                        <!--color: '#000000'-->
                    <!--},-->
                    <!--schedule: {-->
                        <!--lastDayOfMonth: [1],-->
                        <!--duration: 1,-->
                        <!--durationUnit: 'hours'-->
                    <!--}-->
                <!--},-->
                <!--{-->
                    <!--data: {-->
                        <!--title: 'Mother\'s Day',-->
                        <!--color: '#2196F3',-->
                        <!--calendar: 'US Holidays'-->
                    <!--},-->
                    <!--schedule: {-->
                        <!--month: [Month.MAY],-->
                        <!--dayOfWeek: [Weekday.SUNDAY],-->
                        <!--weekspanOfMonth: [1]-->
                    <!--}-->
                <!--},-->
                <!--{-->
                    <!--data: {-->
                        <!--title: 'New Year\'s Day',-->
                        <!--color: '#2196F3',-->
                        <!--calendar: 'US Holidays'-->
                    <!--},-->
                    <!--schedule: {-->
                        <!--month: [Month.JANUARY],-->
                        <!--dayOfMonth: [1]-->
                    <!--}-->
                <!--},-->
                <!--{-->
                    <!--data: {-->
                        <!--title: 'Inauguration Day',-->
                        <!--color: '#2196F3',-->
                        <!--calendar: 'US Holidays'-->
                    <!--},-->
                    <!--schedule: {-->
                        <!--month: [Month.JANUARY],-->
                        <!--dayOfMonth: [20]-->
                    <!--}-->
                <!--},-->
                <!--{-->
                    <!--data: {-->
                        <!--title: 'Martin Luther King, Jr. Day',-->
                        <!--color: '#2196F3',-->
                        <!--calendar: 'US Holidays'-->
                    <!--},-->
                    <!--schedule: {-->
                        <!--month: [Month.JANUARY],-->
                        <!--dayOfWeek: [Weekday.MONDAY],-->
                        <!--weekspanOfMonth: [2]-->
                    <!--}-->
                <!--},-->
                <!--{-->
                    <!--data: {-->
                        <!--title: 'George Washington\'s Birthday',-->
                        <!--color: '#2196F3',-->
                        <!--calendar: 'US Holidays'-->
                    <!--},-->
                    <!--schedule: {-->
                        <!--month: [Month.FEBRUARY],-->
                        <!--dayOfWeek: [Weekday.MONDAY],-->
                        <!--weekspanOfMonth: [2]-->
                    <!--}-->
                <!--},-->
                <!--{-->
                    <!--data: {-->
                        <!--title: 'Memorial Day',-->
                        <!--color: '#2196F3',-->
                        <!--calendar: 'US Holidays'-->
                    <!--},-->
                    <!--schedule: {-->
                        <!--month: [Month.MAY],-->
                        <!--dayOfWeek: [Weekday.MONDAY],-->
                        <!--lastWeekspanOfMonth: [0]-->
                    <!--}-->
                <!--},-->
                <!--{-->
                    <!--data: {-->
                        <!--title: 'Independence Day',-->
                        <!--color: '#2196F3',-->
                        <!--calendar: 'US Holidays'-->
                    <!--},-->
                    <!--schedule: {-->
                        <!--month: [Month.JULY],-->
                        <!--dayOfMonth: [4]-->
                    <!--}-->
                <!--},-->
                <!--{-->
                    <!--data: {-->
                        <!--title: 'Labor Day',-->
                        <!--color: '#2196F3',-->
                        <!--calendar: 'US Holidays'-->
                    <!--},-->
                    <!--schedule: {-->
                        <!--month: [Month.SEPTEMBER],-->
                        <!--dayOfWeek: [Weekday.MONDAY],-->
                        <!--lastWeekspanOfMonth: [0]-->
                    <!--}-->
                <!--},-->
                <!--{-->
                    <!--data: {-->
                        <!--title: 'Columbus Day',-->
                        <!--color: '#2196F3',-->
                        <!--calendar: 'US Holidays'-->
                    <!--},-->
                    <!--schedule: {-->
                        <!--month: [Month.OCTOBER],-->
                        <!--dayOfWeek: [Weekday.MONDAY],-->
                        <!--weekspanOfMonth: [1]-->
                    <!--}-->
                <!--},-->
                <!--{-->
                    <!--data: {-->
                        <!--title: 'Veterans Day',-->
                        <!--color: '#2196F3',-->
                        <!--calendar: 'US Holidays'-->
                    <!--},-->
                    <!--schedule: {-->
                        <!--month: [Month.NOVEMBER],-->
                        <!--dayOfMonth: [11]-->
                    <!--}-->
                <!--},-->
                <!--{-->
                    <!--data: {-->
                        <!--title: 'Thanksgiving Day',-->
                        <!--color: '#2196F3',-->
                        <!--calendar: 'US Holidays'-->
                    <!--},-->
                    <!--schedule: {-->
                        <!--month: [Month.NOVEMBER],-->
                        <!--dayOfWeek: [Weekday.THURSDAY],-->
                        <!--weekspanOfMonth: [3]-->
                    <!--}-->
                <!--},-->
                <!--{-->
                    <!--data: {-->
                        <!--title: 'Christmas Day',-->
                        <!--color: '#2196F3',-->
                        <!--calendar: 'US Holidays'-->
                    <!--},-->
                    <!--schedule: {-->
                        <!--month: [Month.DECEMBER],-->
                        <!--dayOfMonth: [25]-->
                    <!--}-->
                <!--}-->
            <!--]-->
        <!--}),-->

        <!--mounted()-->
        <!--{-->
            <!--window.app = this.$refs.app;-->

            <!--this.loadState();-->
        <!--},-->

        <!--methods:-->
            <!--{-->
                <!--getCalendarTime(calendarEvent)-->
                <!--{-->
                    <!--let sa = calendarEvent.start.format('a');-->
                    <!--let ea = calendarEvent.end.format('a');-->
                    <!--let sh = calendarEvent.start.format('h');-->
                    <!--let eh = calendarEvent.end.format('h');-->

                    <!--if (calendarEvent.start.minute !== 0)-->
                    <!--{-->
                        <!--sh += calendarEvent.start.format(':mm');-->
                    <!--}-->

                    <!--if (calendarEvent.end.minute !== 0)-->
                    <!--{-->
                        <!--eh += calendarEvent.end.format(':mm');-->
                    <!--}-->

                    <!--return (sa === ea) ? (sh + ' - ' + eh + ea) : (sh + sa + ' - ' + eh + ea);-->
                <!--},-->

                <!--saveState()-->
                <!--{-->
                    <!--let state = this.calendar.toInput(true);-->
                    <!--let json = JSON.stringify(state);-->

                    <!--localStorage.setItem(this.storeKey, json);-->
                <!--},-->

                <!--loadState()-->
                <!--{-->
                    <!--let state = {};-->

                    <!--try-->
                    <!--{-->
                        <!--let savedState = JSON.parse(localStorage.getItem(this.storeKey));-->

                        <!--if (savedState)-->
                        <!--{-->
                            <!--state = savedState;-->
                            <!--state.preferToday = false;-->
                        <!--}-->
                    <!--}-->
                    <!--catch (e)-->
                    <!--{-->
                        <!--// eslint-disable-next-line-->
                        <!--console.log( e );-->
                    <!--}-->

                    <!--if (!state.events || !state.events.length)-->
                    <!--{-->
                        <!--state.events = this.defaultEvents;-->
                    <!--}-->

                    <!--state.events.forEach(ev =>-->
                    <!--{-->
                        <!--let defaults = this.$dayspan.getDefaultEventDetails();-->

                        <!--ev.data = Vue.util.extend( defaults, ev.data );-->
                    <!--});-->

                    <!--this.$refs.app.setState( state );-->
                <!--}-->
            <!--}-->
    <!--}-->
<!--</script>-->

<!--<style>-->

    <!--body, html, #app, #dayspan {-->
        <!--font-family: Roboto, sans-serif !important;-->
        <!--width: 100%;-->
        <!--height: 100%;-->
    <!--}-->

    <!--.v-btn&#45;&#45;flat,-->
    <!--.v-text-field&#45;&#45;solo .v-input__slot {-->
        <!--background-color: #f5f5f5 !important;-->
        <!--margin-bottom: 8px !important;-->
    <!--}-->
<!--</style>-->
