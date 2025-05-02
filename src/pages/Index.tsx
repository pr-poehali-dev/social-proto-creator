
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Демо проекты</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Карточка проекта Melody */}
          <Card className="overflow-hidden">
            <div className="h-48 bg-melody-background relative">
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <span className="text-3xl font-bold text-melody-olive">Melody</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full">
                <div className="h-16 bg-gradient-to-t from-white to-transparent"></div>
              </div>
            </div>
            <CardHeader>
              <CardTitle>Профиль Melody Salvatore</CardTitle>
              <CardDescription>
                Стильный профиль в нежно-розовых и оливковых тонах
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Креативный дизайн профильной страницы с фотографиями, описаниями и декоративными элементами.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/melody-profile" className="w-full">
                <Button className="w-full bg-melody-pink hover:bg-melody-olive">
                  Перейти к проекту
                </Button>
              </Link>
            </CardFooter>
          </Card>
          
          {/* Карточка проекта PastelProfile */}
          <Card className="overflow-hidden">
            <div className="h-48 bg-pastel-light-pink relative">
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <span className="text-3xl font-bold text-pastel-pink">Pastel</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full">
                <div className="h-16 bg-gradient-to-t from-white to-transparent"></div>
              </div>
            </div>
            <CardHeader>
              <CardTitle>Пастельный профиль</CardTitle>
              <CardDescription>
                Профиль с пастельными и закругленными элементами
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Страница в пастельных тонах с звездочками, значками и дополнительной информацией.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/pastel-profile" className="w-full">
                <Button className="w-full bg-pastel-pink hover:bg-pastel-dark-pink">
                  Перейти к проекту
                </Button>
              </Link>
            </CardFooter>
          </Card>
          
          {/* Карточка проекта Dating */}
          <Card className="overflow-hidden">
            <div className="h-48 bg-red-50 relative">
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <Icon name="Heart" size={48} className="text-red-400" />
              </div>
              <div className="absolute bottom-0 left-0 w-full">
                <div className="h-16 bg-gradient-to-t from-white to-transparent"></div>
              </div>
            </div>
            <CardHeader>
              <CardTitle>Приложение знакомств</CardTitle>
              <CardDescription>
                Интерфейс для приложения знакомств
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Функциональное приложение со свайпами, информацией о профиле и возможностью лайков.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/dating" className="w-full">
                <Button className="w-full bg-red-400 hover:bg-red-500">
                  Перейти к проекту
                </Button>
              </Link>
            </CardFooter>
          </Card>
          
        </div>
      </div>
    </div>
  );
};

export default Index;
